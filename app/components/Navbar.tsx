'use client';

/** Libraries */
import { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

/** Functional */
import { moveSvgLine, navbarLinks } from './Navbar.utils';

const Navbar = () => {
  const pathname = usePathname();
  const [durations, setDurations] = useState({
    navAfter: 'after:duration-0',
    linkColors: 'duration-0',
  });

  useEffect(() => {
    moveSvgLine(pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    setDurations({
      navAfter: 'after:duration-500',
      linkColors: 'duration-400',
    });
  }, []);

  return (
    <nav
      className={`after:content-[' '] relative z-50 w-full overflow-x-clip text-text-secondary  
      after:absolute after:-bottom-[10px] after:-z-10 after:h-[2px] after:w-full after:origin-left
      after:translate-x-[var(--left)] after:scale-x-[var(--width,0px)] after:bg-secondary-main after:transition-transform ${durations.navAfter}
      `}
      style={{ '--left': 0, '--width': 0 } as React.CSSProperties}
      role="navigation"
    >
      <ul className="flex justify-between gap-2" role="tablist">
        {navbarLinks.map((item, index) => (
          <li key={index} className={`flex w-[70px] ${item.className}`} role="tab">
            <Link
              className={`h-full transition-colors  ease-in-out hover:text-secondary-main active:text-secondary-light  
              ${durations.linkColors} ${
                pathname === item.path ? 'active-link text-secondary-main' : 'not-active'
              }`}
              href={item.path}
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
