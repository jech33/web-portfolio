import { StaticImageData } from 'next/image';

export type Work = {
  id: string;
  year: number;
  title: string;
  workType: string;
  shortDescription: string;
  description: string;
  url: string;
  mainImageSrc: StaticImageData;
  tags: string[];
};
