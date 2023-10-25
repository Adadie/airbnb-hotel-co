import Image from 'next/image';
import { Inter } from 'next/font/google';
import HomeLayout from '@/components/Layout/homeLayout';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <HomeLayout>
      <div className="text-2xl">Data........</div>
    </HomeLayout>
  );
}
