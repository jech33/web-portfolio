import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

/** Functional */
import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import SocialMedia from './_components/SocialMedia';
import { baseUrl } from './config';

/** Assets */
import './globals.css';
import FixedLoader from './_components/FixedLoader';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: 'Javier Echavez',
  description: 'Javier Echavez Chardaux’s personal website',
  icons: {
    icon: ['/favicon.ico'],
  },
  authors: [
    {
      name: 'Javier Echavez Chardaux',
      url: 'https://github.com/jech33',
    },
  ],
  keywords: [
    'jech33',
    'jech',
    'react',
    'frontend',
    'javier',
    'javier echavez',
    'javier echavez chardaux',
  ],
  openGraph: {
    type: 'website',
    url: 'jech.vercel.app',
    title: 'Javier Echavez',
    description: 'Javier Echavez Chardaux’s personal website',
    siteName: 'jech',

    images: [
      {
        alt: 'Javier Echavez Linkedin Image',
        url: 'https://jech.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-original.e1777d66.jpg&w=1200&q=75',
      },
    ],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} container mx-auto bg-background-main px-6 text-text-primary`}
      >
        <FixedLoader />
        <div className="flex max-h-[100dvh] min-h-[100svh] flex-col gap-2 py-4">
          <Navbar />
          <main className="relative z-0 flex w-full flex-grow overflow-auto border-[1px] border-divider-main">
            <div className="absolute top-0 flex h-6 w-full items-end justify-center gap-5 bg-gradient-to-b from-background-main from-20%" />
            <div className="z-1 flex max-h-full flex-grow flex-col justify-between overflow-auto px-6 pb-[112px]">
              {children}
            </div>
            <SocialMedia />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
