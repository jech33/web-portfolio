import Image from 'next/image';
import React from 'react';
import AboutSection from './_components/AboutSection';
import { getAboutPage } from '@/_api/pages';

const About = async () => {
  const pageData = await getAboutPage();
  return (
    <article className="mx-auto flex max-w-[740px] flex-col pt-6">
      <section className="flex flex-col gap-6 md:gap-0">
        <div className="relative flex h-[284px]">
          <h1 className="absolute flex h-full w-full items-center justify-center bg-background-main bg-opacity-30 p-6 text-center text-3xl md:relative md:w-1/2">
            {pageData?.title}
          </h1>
          {pageData?.imageUrl && (
            <Image
              className="h-full w-1/2 flex-grow object-cover object-top"
              width={1024}
              height={720}
              src={pageData?.imageUrl}
              alt={'Javier Echavez Cover Image'}
            />
          )}
        </div>
        <div className="flex flex-col-reverse gap-6 md:h-[284px] md:flex-row md:gap-0">
          <div className="h-full w-full bg-background-dark md:w-1/2">
            <iframe
              title="Google Maps Embedded map"
              className="w-full"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8021461.181462945!2d-79.30661997926354!3d10.983809179411454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef42d44d12ae605%3A0x2633844581b917b2!2sBarranquilla%2C%20Atlantico!5e0!3m2!1sen!2sco!4v1698873251366!5m2!1sen!2sco"
              height="284"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <p className="h-full w-full md:w-1/2 md:pl-6 md:pt-6">{pageData?.description}</p>
        </div>
      </section>
      <section className="mt-12 flex flex-col gap-12">
        {pageData?.sections.map((section, idx) => <AboutSection key={idx} {...section} />)}
      </section>
    </article>
  );
};

export default About;
