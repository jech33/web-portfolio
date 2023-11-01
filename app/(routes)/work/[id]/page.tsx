import Image from 'next/image';
import { getProjects } from '../Work.utils';

const WorkId = (props: { params: { id: string } }) => {
  const { id } = props.params;
  const project = getProjects().find((project) => project.id === id);

  if (!project) return null;

  const { title, workType, shortDescription, mainImageSrc, tags, description, url } = project;

  const shortUrl = url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, '').split('/')[0];

  return (
    <article className="mx-auto flex w-full max-w-[720px] flex-col gap-6 pt-6">
      <section className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row md:gap-4">
          <h1 className="text-3xl lg:text-5xl">{title}</h1>
          <div className="flex flex-grow items-center gap-4">
            <span className="h-[1px] flex-grow bg-text-primary" />
            <h2 className="text-3xl lg:text-5xl">{workType}</h2>
          </div>
        </div>
        <h3>{shortDescription}</h3>
      </section>
      <Image
        className="object-fit my-3"
        alt={`${id}-main-image`}
        height={1080}
        width={1920}
        src={mainImageSrc}
      />
      <section className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-3">
          {tags.map((tag, idx) => (
            <p
              key={idx}
              className="overflow-hidden text-ellipsis whitespace-nowrap rounded-full border-[1px] border-text-secondary bg-background-light px-2 uppercase"
            >
              {tag}
            </p>
          ))}
        </div>
        <p>{description}</p>
        <a
          href={url}
          target="_blank"
          className="max-w-full break-words uppercase underline underline-offset-4"
        >
          {shortUrl}
        </a>
      </section>
    </article>
  );
};

export default WorkId;
