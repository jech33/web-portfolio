import './globals.css';
import { Montserrat } from 'next/font/google';
import Footer from './components/Footer';
import type { Metadata } from 'next';
import Navbar from './components/Navbar';
import SocialMedia from './components/SocialMedia';

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
        <div className="flex min-h-[100dvh] flex-col gap-2 py-4">
          <Navbar />
          <main className="relative w-full flex-grow border-[1px] border-divider-main">
            {children}
            <SocialMedia />
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
