import Image from 'next/image';

/** Assets */
import ProfilePicture from '@/public/avatar-circle.jpg';

export default function Home() {
  return (
    <div className="flex flex-grow flex-col justify-between px-6 pb-[112px] pt-4">
      <div className="flex flex-col items-end text-text-secondary">
        <h1 className="text-4xl">Javier Echavez</h1>
        <h2>Frontend Developer</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-10">
        <p className="text-text-primary md:text-xl lg:text-4xl">
          Hey! Nice to see you here, I&apos;m Javier and I code
        </p>
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
