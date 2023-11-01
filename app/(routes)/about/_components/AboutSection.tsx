type AboutSectionProps = {
  title: string;
  items: { label: string; place: string; time: string }[];
};

const AboutSection = (props: AboutSectionProps) => {
  const { title, items } = props;

  return (
    <section className="flex flex-col gap-8 md:flex-row md:border-t-[1px] md:border-divider-main md:pt-8">
      <h2 className="border-b-[1px] border-divider-main pb-2 uppercase md:min-w-[160px] md:max-w-[160px] md:border-none md:pb-0">
        {title}
      </h2>
      <div className="flex w-full flex-col gap-8">
        {items.map((item, idx) => (
          <div key={idx} className="flex flex-col md:flex-row md:items-start md:gap-8">
            <div className="flex-grow">
              <p className="capitalize">{item.place}</p>
              <p className="text-2xl font-medium leading-10">{item.label}</p>
            </div>
            <p className="flex h-full items-end pb-[5.5px] uppercase md:min-w-[160px] md:max-w-[160px] md:justify-end">
              {item.time}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutSection;
