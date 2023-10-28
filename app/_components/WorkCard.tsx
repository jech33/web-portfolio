import { Work } from '@/_types/Work';
import Image from 'next/image';

const WorkCard = (props: Work) => {
  const { mainImageSrc, title, shortDescription, workType, year } = props;
  return (
    <article className="inline-block max-w-[25rem] gap-2">
      <section className="flex flex-col gap-2">
        <Image
          className="h-[300px] w-full object-cover object-top sm:h-[450px]"
          width={1024}
          height={720}
          src={mainImageSrc}
          alt={`${title}-cover-image`}
        />
        <h2 className="text-[32px] font-medium">{title}</h2>
        <div className="flex flex-row-reverse items-start justify-between">
          <h3 className="text-[32px] font-medium leading-10">{workType}</h3>
          <h4 className="text-base font-medium">{`(${year})`}</h4>
        </div>
        <p>{shortDescription}</p>
      </section>
    </article>
  );
};

export default WorkCard;
