import lang from '@/_locales';

export type NavbarLink = {
  label: string;
  path: string;
  className: string;
  linePosition: string;
  modifier: number;
};

export const navbarLinks: NavbarLink[] = [
  {
    label: lang.navbarMe,
    path: '/',
    className: '',
    linePosition: '0%',
    modifier: 0,
  },
  {
    label: lang.navbarWork,
    path: '/work',
    className: 'justify-center',
    linePosition: '50%',
    modifier: 2,
  },
  {
    label: lang.navbarAbout,
    path: '/about',
    className: 'justify-end',
    linePosition: '100%',
    modifier: 1,
  },
];

export const moveSvgLine = (navbarLink: NavbarLink, activeElement: HTMLAnchorElement) => {
  const parentContainer = document.querySelector('[role=navigation]') as HTMLAnchorElement;
  parentContainer.style.setProperty(
    '--left',
    navbarLink?.linePosition
      ? !navbarLink?.modifier
        ? navbarLink?.linePosition
        : `calc(${navbarLink?.linePosition} - ${
            activeElement.clientWidth / navbarLink?.modifier
          }px)`
      : '0%'
  );
  parentContainer.style.setProperty(
    '--width',
    `${activeElement.clientWidth / parentContainer.clientWidth}`
  );
};
