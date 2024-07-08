import { AboutPage, AboutSection, HomePage } from '@/_types/Pages';
import { client } from '@/sanity/lib/client';
import { groq } from 'next-sanity';
import { AboutPage as AboutSanity, Home } from '../../sanity.types';
import { urlForImage } from '@/sanity/lib/image';
import { Image } from 'sanity';

const transformHomePage = (page: Home): HomePage => {
  return {
    title: page.title || '',
    subtitle: page.subtitle || '',
    intro: page.intro || '',
    introPhrases: page.introPhrases || [],
    imageUrl: page.image ? urlForImage(page.image as Image) : '',
    body: page.body || '',
  };
};

const transformAboutPage = (page: AboutSanity): AboutPage => {
  return {
    title: page.title || '',
    description: page.description || '',
    imageUrl: page.image ? urlForImage(page.image as Image) : '',
    sections: (page.sections || []) as AboutSection[],
  };
};

export const getHomePage = async (): Promise<HomePage | null> => {
  const getHomePageQuery = groq`*[_type == "home" && slug.current == "home"][0]`;
  const data = await client.fetch(
    getHomePageQuery,
    {},
    {
      next: {
        revalidate: 60, // look for updates to revalidate cache every minute
      },
    }
  );

  const result: Home = data;

  return result ? transformHomePage(result) : null;
};

export const getAboutPage = async (): Promise<AboutPage | null> => {
  const getAboutPageQuery = groq`*[_type == "aboutPage" && slug.current == "about"][0]{title, description, image, sections[]{title, items[] {label, place, time}}}`;
  const data = await client.fetch(getAboutPageQuery);
  console.log(data);

  const result: AboutSanity = data;

  return result ? transformAboutPage(result) : null;
};
