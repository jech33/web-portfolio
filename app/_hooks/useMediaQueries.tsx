'use client';
import { useEffect, useMemo, useState } from 'react';

function useMediaQuery(query: string) {
  const mediaQuery = useMemo(() => {
    if (typeof window === 'undefined') {
      return {} as MediaQueryList;
    }

    return window.matchMedia(query);
  }, [query]);

  const [match, setMatch] = useState<boolean>(true);

  useEffect(() => {
    setMatch(mediaQuery.matches);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const onChange = () => setMatch(mediaQuery.matches);
    mediaQuery.addEventListener('change', onChange);

    return () => mediaQuery.removeEventListener('change', onChange);
  }, [mediaQuery]);

  return match;
}

export function useMediaQueries() {
  const md = useMediaQuery('(min-width: 768px)');
  const lg = useMediaQuery('(min-width: 1024px)');

  return { md, lg };
}
