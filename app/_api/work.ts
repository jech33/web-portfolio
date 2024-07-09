import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { Project } from '../../sanity.types';
import { Image } from 'sanity';
import { urlForImage } from '@/sanity/lib/image';
import { Work } from '@/_types/Work';

const transformProject = (project: Project): Work => {
  return {
    year: project.startDate ? new Date(project.startDate).getFullYear() : 0,
    title: project.title || '',
    workType: project.projectType || '',
    shortDescription: project.description || null,
    mainImageSrc: project.mainImage ? urlForImage(project.mainImage as Image) : '',
    tags: project.tags || [],
    description: project.body || null,
    url: project.url || '',
    slug: project.slug?.current || '',
  };
};

export const getProjectBySlug = async (sanitySlug: string): Promise<Work | null> => {
  // @sanity-typegen-ignore
  const getProjectBySlugQuery = groq`*[_type == "project" && slug.current == "${sanitySlug}"][0]`;
  const data = await client.fetch(
    getProjectBySlugQuery,
    {},
    {
      next: {
        revalidate: 60, // look for updates to revalidate cache every minute
      },
    }
  );

  const result: Project = data;

  return result ? transformProject(result) : null;
};

export const getProjects = async (): Promise<Work[]> => {
  const getProjectsQuery = groq`*[_type == "project"] | order(startDate desc)`;
  const projects: Project[] = await client.fetch(
    getProjectsQuery,
    {},
    {
      next: {
        revalidate: 60, // look for updates to revalidate cache every minute
      },
    }
  );

  return projects.map((project) => transformProject(project));
};
