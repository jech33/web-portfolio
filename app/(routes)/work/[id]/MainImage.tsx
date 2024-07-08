'use client';
import Image from 'next/image';
import React, { useState } from 'react';

export type MainImageProps = {
  id: string;
  src: string;
};

const MainImage = (props: MainImageProps) => {
  const { id, src } = props;
  const [isLoadingImg, setIsLoadingImg] = useState(true);
  return (
    <>
      {isLoadingImg && (
        <>
          <div className="absolute left-0 top-0 z-10 h-full w-full bg-background-dark" />
          <div className="absolute left-0 top-0 z-10 h-full w-full animate-pulse bg-background-light" />
        </>
      )}
      <Image
        className="w-full object-cover"
        alt={`${id}-main-image`}
        height={1080}
        width={1920}
        src={src}
        onLoad={() => setIsLoadingImg(false)}
      />
    </>
  );
};

export default MainImage;
