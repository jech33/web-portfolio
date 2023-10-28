import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

/** Functional */
import Footer from './_components/Footer';
import Navbar from './_components/Navbar';
import SocialMedia from './_components/SocialMedia';

/** Assets */
import './globals.css';
import FixedLoader from './_components/FixedLoader';

const montserrat = Montserrat({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Javier Echavez',
  description: 'Javier Echavez Chardaux web portfolio',
  icons: {
    icon: ['/favicon.ico'],
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
            <div className="z-1 flex max-h-full flex-grow flex-col justify-between overflow-auto px-6 pb-[96px] pt-6">
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
