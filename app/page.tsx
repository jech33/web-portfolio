/** Assets */
import lang from './_locales';
import Typewriter from './_components/Typewriter';
import IntroAvatar from './_components/IntroAvatar';

export default function Home() {
  return (
    <div className="flex max-h-full flex-grow flex-col justify-between overflow-auto px-6 pb-[88px] pt-4">
      <div className="flex flex-col items-end text-text-secondary">
        <h1 className="text-3xl sm:text-4xl">Javier Echavez</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className="my-[2.5rem] flex flex-grow flex-col items-center justify-center gap-10">
        <div className="block text-center text-text-primary md:text-xl lg:text-3xl">
          <p className="leading-0 lg:leading-[48px]">
            {`${lang.intro} `} <br /> <Typewriter />
          </p>
        </div>
        <IntroAvatar />
      </div>
      <p className="pb-2 lg:max-w-[50%]">{lang.briefDescription}</p>
    </div>
  );
}
