import Image from 'next/image';

/** Assets */
import ProfilePicture from '@/public/avatar-circle.jpg';
import lang from './lang';
import Typewriter from './components/Typewriter';

export default function Home() {
  return (
    <div className="flex flex-grow flex-col justify-between px-6 pb-[112px] pt-4">
      <div className="flex flex-col items-end text-text-secondary">
        <h1 className="text-4xl">Javier Echavez</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <div className="block text-center text-text-primary md:text-xl lg:text-4xl">
          <p className="">{lang.intro}</p>
          <p className="mt-3">
            <Typewriter />
          </p>
        </div>
        <Image
          src={ProfilePicture}
          width={150}
          height={150}
          alt="profile-picture"
          className="rounded-full"
        />
      </div>
    </div>
  );
}
