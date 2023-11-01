import LibonatiImage from '@/public/project_libonati.png';
import OvernightsImage from '@/public/project_overnights.png';
import VozyImage from '@/public/project_vozy.png';

export const en = {
  navbarMe: 'me',
  navbarWork: 'work',
  navbarAbout: 'about',
  intro: "Hey! Nice to see you here, I'm Javier and I",
  introPhrases: [
    'code',
    'play guitar/bass',
    'workout',
    'love food',
    'play videogames',
    'listen to music',
  ],
  briefDescription:
    'I’ve been coding since college and I love playing around with frontend technologies. I was born and raised in Barranquilla, Colombia, the city were I took my first steps as a web developer. I’m passionate about implementing/coding pixel-perfect, beautiful and cutting edge UI/UX designs.',
  contact: 'Let’s Talk!',
  work: [
    {
      id: 'overnights',
      year: 2023,
      title: 'Overnights',
      workType: 'Web app/site',
      shortDescription: 'Experience unforgettable moments in fantastic places. App from 0 to MVP.',
      description:
        'Unlike traditional platforms, Overnights is committed to transparency and fairness. We have completely eliminated fees and hidden costs for both renters and owners, ensuring a level playing field for all. This paradigm shift fosters open communication, giving individuals the freedom to grow their vacation rental businesses with unrivaled autonomy.  My role in this project was to take a beautiful app design and turn it into a functional mobile first web app.',
      url: 'https://www.overnights.com',
      mainImageSrc: OvernightsImage,
      tags: [
        'role: tech lead',
        '2022',
        '2023',
        'web development',
        'React.js',
        'Node.js',
        'Next.js',
        'MUI',
      ],
    },
    {
      id: 'vozy',
      year: 2022,
      title: 'Vozy',
      workType: 'Web app',
      shortDescription:
        'Evolving the relationship between companies and their customers through memorable experiences with conversational AI. New features and bugs fixing.',
      description:
        'Lili is a multi-channel conversational assistant powered by conversational AI that will help you automate customer service, transforming repetitive and time-consuming processes into functional systems at a fraction of the cost. My role at Vozy was to take product requirements and work hands on with all engineering areas to develop new features and fix bugs within its web platform.',
      url: 'https://www.vozy.co',
      mainImageSrc: VozyImage,
      tags: [
        'role: software engineer',
        '2022',
        'web development',
        'React.js',
        'Node.js',
        'Core UI',
      ],
    },
    {
      id: 'bruno-libonati',
      year: 2022,
      title: 'Bruno Libonati',
      workType: 'Website',
      shortDescription:
        'Rock music inspired by magic, quantum physics and multiverses. Website with CMS built in.',
      description:
        'After their first appearance in Ruido Caribe, Bruno formed a band with his friends Javier Echavez (bass), Juan Carlos Freyle (guitar), and Marlon Cabarcas (drums). The band became solid since the time it was formed, and each member’s focus took Bruno Libonati to the next level, having success in different festivals and rock venues in Medellín, Bogotá, and Barranquilla. My role in this project was to design and build the website from zero and deploy it.',
      url: 'https://brunolibonati.vercel.app',
      mainImageSrc: LibonatiImage,
      tags: [
        'role: developer',
        '2022',
        'web development',
        'React.js',
        'Next.js',
        'Node.js',
        'TailwindCSS',
      ],
    },
  ],
  about: {
    title: 'A little about me',
    description:
      'Hey there! I’m Javier, but feel free to call me Javi. I’m a web developer based in sunny Barranquilla, Colombia. While I’m passionate about Frontend Development, I’m also quite the curious cat and dabble in backend magic. Since 2015, I’ve been weaving code into all my engineering endeavors, and there’s nothing quite like the satisfaction of seeing it all click (just the way clients/users pick 👀).',
    workExperience: {
      title: 'Work Experience',
      items: [
        {
          label: 'Tech Lead React Node',
          place: 'Overnights',
          time: 'JUL 2023 - PRESENT',
        },
        {
          label: 'Fullstack Developer React Node',
          place: 'Overnights',
          time: 'MAY 2023 - JUL 2023',
        },
        {
          label: 'Frontend Developer React',
          place: 'Overnights',
          time: 'JUL 2022 - MAY 2023',
        },
        {
          label: 'Frontend Engineer React',
          place: 'Vozy',
          time: 'FEB 2022 - SEP 2022',
        },
        {
          label: 'Jr. Software Developer React Node',
          place: 'Ludycom',
          time: 'SEP 2021 - JAN 2022',
        },
        {
          label: 'Transportation Engineer',
          place: 'Instituto de Transito del Atlantico',
          time: 'NOV 2020 - JUL 2021',
        },
        {
          label: 'Jr. Transportation Engineer',
          place: 'BH Ingenieria y Desarrollo',
          time: 'JAN 2020 - DEC 2020',
        },
        {
          label: 'Assistant Research Engineer',
          place: 'Universidad del Norte',
          time: 'SEP 2017 - JUL 2019',
        },
      ],
    },
    education: {
      title: 'EDUCATION',
      items: [
        {
          label: 'Certified Software and Web Applications Developer',
          place: 'Universidad del Norte',
          time: 'CLASS OF 2021',
        },
        {
          label: 'Master of Science in Transportation Engineering',
          place: 'Universidad del Norte',
          time: 'CLASS OF 2021',
        },
        {
          label: 'Bachelor of Science in Civil Engineering',
          place: 'Universidad del Norte',
          time: 'CLASS OF 2018',
        },
      ],
    },
    recognitions: {
      title: 'Recognitions',
      items: [
        {
          label: 'Saber Pro Colombia Engineering Top Scores',
          place: 'Universidad del Norte',
          time: '2017',
        },
        {
          label: 'Scholarship Program: Academic Excellence',
          place: 'Gases del Caribe',
          time: '2013',
        },
        {
          label: 'ICFES Colombia Rank 3 out of 1000',
          place: 'Colegio del Sagrado Scorazón',
          time: '2012',
        },
      ],
    },
  },
};
