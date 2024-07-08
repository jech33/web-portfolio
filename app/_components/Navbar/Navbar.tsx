'use client';

/** Libraries */
import { MouseEvent as ReactMouseEvent, useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/** Functional */
import { NavbarLink, moveSvgLine, navbarLinks } from './Navbar.utils';

const Navbar = () => {
  const pathname = `/${usePathname().split('/')[1]}`;
  const navRef = useRef<HTMLElement>(null);
  const [activeElement, setActiveElement] = useState<HTMLAnchorElement | null>(null);
  const [durations, setDurations] = useState({
    navAfter: 'after:duration-0',
    linkColors: 'duration-0',
  });

  const activeElementWidth = activeElement?.clientWidth || 0;
  const navWidth = navRef?.current?.clientWidth || 1;

  const onLinkClick = (e: ReactMouseEvent<HTMLAnchorElement, MouseEvent>, item: NavbarLink) => {
    moveSvgLine(item, e.currentTarget);
    setActiveElement(e.currentTarget);
  };

  useEffect(() => {
    const link = navbarLinks.find((item) => item.path === pathname) || navbarLinks[0];
    const element = document.querySelector(`[href="${pathname}"]`) as HTMLAnchorElement;
    if (!element) {
      return;
    }

    setDurations({
      navAfter: 'after:duration-500',
      linkColors: 'duration-400',
    });

    moveSvgLine(link, element);
    setActiveElement(element);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <nav
      className={`after:content-[' '] relative z-50 min-h-6 w-full text-text-secondary
      after:absolute after:-bottom-[8.9px] after:z-50 after:h-[2px] after:w-full after:origin-left
      after:translate-x-[var(--left)] after:scale-x-[var(--width,0px)] after:bg-secondary-main after:transition-transform ${durations.navAfter}
      `}
      style={{ '--left': 0, '--width': activeElementWidth / navWidth } as React.CSSProperties}
      role="navigation"
      ref={navRef}
    >
      <ul className="flex justify-between gap-2" role="tablist">
        {navbarLinks.map((item, index) => (
          <li key={index} className={`flex w-[70px] ${item.className}`} role="tab">
            <Link
              className={`link h-full transition-colors ease-in-out hover:text-secondary-main active:text-secondary-light  
              ${durations.linkColors} ${
                activeElement?.getAttribute('href') === item.path
                  ? 'active-link text-secondary-main'
                  : 'not-active'
              }`}
              href={item.path}
              onClick={(e) => onLinkClick(e, item)}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
