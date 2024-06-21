import Head from 'next/head';
import './globals.css';
import { Inter } from 'next/font/google';
import Navbar from '@/components/Layout/Navbar';
import Footer from '@/components/Layout/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Natu-Health',
  description: 'This is Natu Health',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/arroup.svg" />
      </Head>
      <body className={inter.className}>
        <Navbar />
        <div className='flex flex-col items-center justify-center w-full h-full'>
          {children}
        </div>
        <div className='z-10 relative w-full md:px-10 lg:px-40 px-10 px-2 bg-white mt-20'>
          <Footer />
        </div>
      </body>
    </html>
  );
}
