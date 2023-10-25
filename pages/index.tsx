import Image from 'next/image';
import { Inter } from 'next/font/google';
import HomeLayout from '@/components/Layout/homeLayout';
import CardListing from '@/components/cards/cardListing';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <HomeLayout>
      <CardListing/>
    </HomeLayout>
  );
}
