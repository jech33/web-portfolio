import { BlockContent } from '../../sanity.types';

export type Work = {
  slug: string;
  year: number;
  title: string;
  workType: string;
  shortDescription: BlockContent | null;
  description: BlockContent | null;
  url: string;
  mainImageSrc: string;
  tags: string[];
};
