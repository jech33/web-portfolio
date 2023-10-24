'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef } from 'react';

const Navbar = () => {
  const pathname = usePathname();
  const svgRef = useRef<SVGSVGElement | null>(null);
  const routes = [
    {
      label: 'me',
      path: '/',
      className: '',
    },
    {
      label: 'work',
      path: '/work',
      className: 'justify-center',
    },
    {
      label: 'about',
      path: '/about',
      className: 'justify-end',
    },
  ];

  const moveSvgLine = () => {
    const element = document.getElementsByClassName('active-link')[0] as HTMLAnchorElement;
    const navbar = element.parentElement?.parentElement;
    const svgLine = document.getElementById('navbar-svg-line');
    if (svgLine && navbar) {
      svgLine.style.left = `${(element.offsetLeft / navbar.clientWidth) * 100}%`;
      svgLine.style.width = `${element.clientWidth}px`;
    }
  };

  useEffect(() => {
    moveSvgLine();
  }, [pathname]);

  useEffect(() => {
    window.addEventListener('resize', moveSvgLine);

    return () => {
      window.removeEventListener('resize', moveSvgLine);
    };
  }, []);

  return (
    <nav className="relative w-full text-text-secondary">
      <svg
        id={'navbar-svg-line'}
        ref={svgRef}
        className="absolute -bottom-[9px] z-50 h-[2px] transition-all"
        width="0"
      >
        <line
          className="stroke-secondary-main stroke-[5]"
          x1="0"
          y1="0"
          x2="100"
          y2="0"
          preserveAspectRatio="xMidYMax slice"
        />
      </svg>
      <ul className="flex justify-between gap-2">
        {routes.map((item, index) => (
          <li key={index} className={`flex w-[70px] ${item.className}`}>
            <Link
              className={`h-full transition duration-200 ease-in-out hover:text-secondary-main active:text-secondary-light  ${
                pathname === item.path ? 'active-link text-secondary-main' : ''
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
