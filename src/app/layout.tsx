'use client';

import { useState, useEffect } from 'react';
import Head from 'next/head';
import { usePathname } from 'next/navigation';
import { Roboto, Yeseva_One } from 'next/font/google';
import localFont from 'next/font/local';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import '@/styles/globals.scss';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--roboto',
  style: ['normal', 'italic'],
});

const yeseva = Yeseva_One({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--yeseva',
  style: 'normal',
});

const local = localFont({
  src: './tan-meringue.otf',
  display: 'swap',
  variable: '--localFont',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const [bgColor, setBgColor] = useState('');

  useEffect(() => {
    if (pathname === '/experiences/8') {
      setBgColor('we');
    } else if (pathname === '/experiences/7') {
      setBgColor('ch');
    } else if (pathname === '/experiences/6') {
      setBgColor('neuc');
    } else if (pathname === '/experiences/5') {
      setBgColor('bp');
    } else if (pathname === '/experiences/4') {
      setBgColor('hi');
    } else if (pathname === '/experiences/3') {
      setBgColor('cf');
    } else if (pathname === '/experiences/2') {
      setBgColor('ac');
    } else if (pathname === '/experiences/1') {
      setBgColor('sf');
    } else if (pathname === '/experiences/0') {
      setBgColor('lp');
    } else if (pathname === '/projects/4') {
      setBgColor('pag');
    } else if (pathname === '/projects/3') {
      setBgColor('n');
    } else if (pathname === '/projects/2') {
      setBgColor('se');
    } else if (pathname === '/projects/1') {
      setBgColor('wa');
    } else if (pathname === '/projects/0') {
      setBgColor('budget');
    }else {
      setBgColor('normal');
    }
  }, [pathname]);
  
  return (
    <html lang="fr" id={bgColor}>
      <Head>
        <title>Portfolio Sissis UL</title>
        <meta name='description'  content='Développeuse web full stack - front-end - back-end'/>
      </Head>
      <body suppressHydrationWarning className={`${roboto.variable} ${yeseva.variable} ${local.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
