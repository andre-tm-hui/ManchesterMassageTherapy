import './globals.css';
import type { Metadata } from 'next';
import { inter } from './fonts';
import Navbar from './_components/navigation/navbar';
import Footer from './_components/navigation/footer';
import { Suspense } from 'react';
import Loading from './loading';

export const metadata: Metadata = {
  title: 'Manchester Massage Therapy',
  description: 'The online home of Manchester Massage Therapy',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={`${inter.className} bg-primary`}>
        <Navbar />
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer />
      </body>
    </html>
  );
}
