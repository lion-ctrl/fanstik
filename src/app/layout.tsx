import type { Metadata } from 'next';
import '../styles/slick/slick.css';
import '../styles/slick/slick.theme.css';
import '../styles/grid.css';
import '../styles/globals.css';
import { Footer, Header, SidebarMenu } from '@/components/app';
import { inter } from '@/fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header />
        <SidebarMenu />
        {children}
        <Footer />
      </body>
    </html>
  );
}
