import OvernightsImage from '@/public/avatar-square.jpg';

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
        'Unlike traditional platforms, Overnights is committed to transparency and fairness. We have completely eliminated fees and hidden costs for both renters and owners, ensuring a level playing field for all. This paradigm shift fosters open communication, giving individuals the freedom to grow their vacation rental businesses with unrivaled autonomy.  My role in this project was to take a beautiful app design and turn it into a functional mobile first web app.',
      url: 'https://www.vozy.com',
      mainImageSrc: OvernightsImage,
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
        'Unlike traditional platforms, Overnights is committed to transparency and fairness. We have completely eliminated fees and hidden costs for both renters and owners, ensuring a level playing field for all. This paradigm shift fosters open communication, giving individuals the freedom to grow their vacation rental businesses with unrivaled autonomy.  My role in this project was to take a beautiful app design and turn it into a functional mobile first web app.',
      url: 'https://brunolibonati.vercel.app',
      mainImageSrc: OvernightsImage,
      tags: [
        'role: frontend developer',
        '2022',
        'web development',
        'React.js',
        'Next.js',
        'Node.js',
        'TailwindCSS',
      ],
    },
  ],
};
