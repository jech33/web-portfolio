/** Assets */
import Typewriter from '@/_components/Typewriter';
import IntroAvatar from '@/_components/IntroAvatar';
import { getHomePage } from '@/_api/pages';

export default async function Home() {
  const pageData = await getHomePage();
  return (
    <>
      <div className="flex flex-col items-end pt-6 text-text-secondary">
        <h1 className="text-3xl sm:text-4xl">{pageData?.title}</h1>
        <h2>{pageData?.subtitle}</h2>
      </div>
      <div className="my-[2.5rem] flex flex-grow flex-col items-center justify-center gap-10">
        <div className="block text-center text-text-primary md:text-xl lg:text-3xl">
          <p className="leading-0 lg:leading-[48px]">
            {`${pageData?.intro} `} <br /> <Typewriter phrases={pageData?.introPhrases || []} />
          </p>
        </div>
        <IntroAvatar imageUrl={pageData?.imageUrl || ''} />
      </div>
      <p className="pb-2 lg:max-w-[50%]">{pageData?.body}</p>
    </>
  );
}
