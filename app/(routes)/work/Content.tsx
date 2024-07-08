'use client';

import WorkCard from '@/_components/WorkCard';
import { useMediaQueries } from '@/_hooks/useMediaQueries';
import { Work } from '@/_types/Work';
import Link from 'next/link';
import React from 'react';

type ContentProps = { projects: Work[] };

const Content = (props: ContentProps) => {
  const { projects } = props;
  const { md } = useMediaQueries();

  const columns = 2;
  const projectsRendered: (typeof projects)[] = new Array(columns).fill([]);

  for (let index = 0; index < projects.length; index = index + columns) {
    let subIndex = index;
    while (subIndex < index + columns && subIndex < projects.length) {
      projectsRendered[subIndex - index] = [
        ...projectsRendered[subIndex - index],
        projects[subIndex],
      ];
      subIndex += 1;
    }
  }
  return !md
    ? projects.map((project, idx) => (
        <Link
          key={project.slug + idx}
          href={`/work/${project.slug}`}
          className="hover:animate-pulse"
        >
          <WorkCard {...project} />
        </Link>
      ))
    : projectsRendered.map((works, i) => (
        <div key={i} className={`flex flex-col gap-24 md:gap-36 ${i % 2 !== 0 ? 'md:pt-44' : ''}`}>
          {works.map((project, idx) => (
            <Link
              key={project.slug + idx}
              href={`/work/${project.slug}`}
              className="hover:animate-pulse"
            >
              <WorkCard {...project} />
            </Link>
          ))}
        </div>
      ));
};

export default Content;
