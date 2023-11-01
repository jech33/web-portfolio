'use client';

import _locales from '@/_locales';
import { NextPage } from 'next';
import Link from 'next/link';
import WorkCard from '@/_components/WorkCard';
import { useMediaQueries } from '@/_hooks/useMediaQueries';

const Work: NextPage = () => {
  const { md } = useMediaQueries();

  const projects = [..._locales.work];
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

  return (
    <div className="m-auto grid gap-x-32 gap-y-24 pt-6 md:grid-cols-2 md:gap-y-0 lg:pt-12">
      {!md
        ? projects.map((project, idx) => (
            <Link
              key={project.id + idx}
              href={`/work/${project.id}`}
              className="hover:animate-pulse"
            >
              <WorkCard {...project} />
            </Link>
          ))
        : projectsRendered.map((works, i) => (
            <div
              key={i}
              className={`flex flex-col gap-24 md:gap-36 ${i % 2 !== 0 ? 'md:pt-44' : ''}`}
            >
              {works.map((project, idx) => (
                <Link
                  key={project.id + idx}
                  href={`/work/${project.id}`}
                  className="hover:animate-pulse"
                >
                  <WorkCard {...project} />
                </Link>
              ))}
            </div>
          ))}
    </div>
  );
};

export default Work;
