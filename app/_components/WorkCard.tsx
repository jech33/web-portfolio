'use client';

import { Work } from '@/_types/Work';
import { PortableText } from 'next-sanity';
import Image from 'next/image';
import { useState } from 'react';

const WorkCard = (props: Work) => {
  const { mainImageSrc, title, shortDescription, workType, year } = props;
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const onImageLoad = () => {
    setIsLoadingImage(false);
  };

  return (
    <article className="inline-block max-w-[25rem] gap-2">
      <section className="relative flex flex-col gap-2">
        {isLoadingImage && (
          <div className="after:content-[' '] absolute top-0 z-[1] h-[300px] w-full bg-background-dark after:absolute after:h-[300px] after:w-full after:animate-pulse after:bg-background-light md:h-[450px] md:after:h-[450px]" />
        )}
        <Image
          className="h-[300px] w-full object-cover object-top md:h-[450px]"
          width={1024}
          height={720}
          src={mainImageSrc}
          alt={`${title}-cover-image`}
          onLoad={onImageLoad}
        />
        <h2 className="text-[32px] font-medium">{title}</h2>
        <div className="flex flex-row-reverse items-start justify-between gap-2">
          <h3 className="text-[32px] font-medium leading-10">{workType}</h3>
          <h4 className="text-base font-medium">{`(${year})`}</h4>
        </div>
        {shortDescription && <PortableText value={shortDescription} />}
      </section>
    </article>
  );
};

export default WorkCard;
