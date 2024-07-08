import { NextPage } from 'next';
import Content from './Content';
import { getProjects } from '@/_api/work';

const Work: NextPage = async () => {
  const projects = await getProjects();

  return (
    <div className="m-auto grid gap-x-32 gap-y-24 pt-6 md:grid-cols-2 md:gap-y-0 lg:pt-12">
      <Content projects={projects} />
    </div>
  );
};

export default Work;
