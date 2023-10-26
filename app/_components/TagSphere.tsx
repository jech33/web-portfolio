/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import TagCloud, { TagCloudOptions } from 'TagCloud';
import { useEffect, useRef } from 'react';

const TagSphere = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const key = 'tagSphereContainer';
  const texts = [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'React.js',
    'TypeScript',
    'Next.js',
    'Node.js',
    'Git',
    'Github',
    'Gitlab',
    'Bitbucket',
    'JIRA',
    'Zustand',
    'Redux',
    'Framer',
    'ES6',
    'Mongo',
  ];

  const options: TagCloudOptions = {
    radius: 135,
    maxSpeed: 'normal',
    initSpeed: 'normal',
    keep: false,
  };

  const getIsInitialized = (id: string) => {
    const key = '__tag-cloud-' + id;

    if (key in window) {
      return Boolean((window as never)[key]);
    }

    return ((window as any)[key] = false);
  };

  const setIsInitialized = (id: string, value: boolean) => {
    const key = '__tag-cloud-' + id;

    (window as any)[key] = value;
  };

  useEffect(() => {
    if (getIsInitialized(key) || !containerRef.current) {
      return;
    }

    const tagCloud = TagCloud(containerRef.current as any, texts, options);

    setIsInitialized(key, true);
    return () => {
      try {
        tagCloud?.destroy();
      } finally {
        setIsInitialized(key, false);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [containerRef]);

  return (
    <div className="tagSphere relative flex h-[200px] w-[200px] items-center justify-center">
      <span
        ref={containerRef}
        className="tagSphereContainer left-0 top-0 inline-block h-[200px] w-[200px] text-divider-light [&>.tagcloud]:h-[200px_!important] [&>.tagcloud]:w-[200px_!important] [&>.tagcloud]:select-none"
      />
    </div>
  );
};

export default TagSphere;
