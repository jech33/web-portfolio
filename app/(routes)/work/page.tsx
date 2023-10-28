import WorkCard from '@/_components/WorkCard';
import _locales from '@/_locales';

const Work = () => {
  const projects = _locales.work;

  return (
    <div className="m-auto grid gap-x-32 gap-y-16 md:grid-cols-2 md:gap-y-0 lg:pt-12">
      {projects.map((project, idx) => (
        <div key={project.id} className={`${idx % 2 !== 0 ? 'md:pt-44' : ''}`}>
          <WorkCard {...project} />
        </div>
      ))}
    </div>
  );
};

export default Work;
