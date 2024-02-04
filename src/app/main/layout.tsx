import type { Metadata } from 'next';
// import { Inter } from "next/font/google";
import IconGlobe from '@/components/icons/IconGlobe';
import { HeaderLayout } from '../layout/header/HeaderLayout';
import { ScrollArea } from '@/components/ui/scroll-area';
import FixedNav from '../layout/header/FixedNav';

export default function RootLayout({ children }) {
  return (
    <>
      <FixedNav></FixedNav>

      <div>{children}</div>
    </>
  );
}
