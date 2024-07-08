export type HomePage = {
  title: string;
  subtitle: string;
  intro: string;
  introPhrases: string[];
  imageUrl: string;
  body: string;
};

export type AboutSection = {
  title: string;
  items: {
    label: string;
    place: string;
    time: string;
  }[];
};

export type AboutPage = {
  title: string;
  description: string;
  imageUrl: string;
  sections: AboutSection[];
};
