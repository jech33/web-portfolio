import lang from '@/_locales';

export const navbarLinks = [
  {
    label: lang.navbarMe,
    path: '/',
    className: '',
    linePosition: '0%',
    lineTransformOrigin: 'left',
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

export const moveSvgLine = (pathname: string) => {
  const parentContainer = document.querySelector('[role=navigation]') as HTMLAnchorElement;
  const activeElement = document.getElementsByClassName('active-link')[0] as HTMLAnchorElement;
  const route = navbarLinks.find((route) => route.path === pathname);
  parentContainer.style.setProperty(
    '--left',
    route?.linePosition
      ? !route?.modifier
        ? route?.linePosition
        : `calc(${route?.linePosition} - ${activeElement.clientWidth / route?.modifier}px)`
      : '0%'
  );
  parentContainer.style.setProperty(
    '--width',
    `${activeElement.clientWidth / parentContainer.clientWidth}`
  );
};
