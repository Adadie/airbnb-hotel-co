import Image from 'next/image';
import { Inter } from 'next/font/google';
import HomeLayout from '@/components/Layout/homeLayout';
import CardListing from '@/components/cards/cardListing';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Listing } from '@/types/listing';
import LandingPageSkeleton from '@/components/skeletons/landingPage';

const inter = Inter({ subsets: ['latin'] });

export default function Home({ listings }: { listings: Listing[] }) {
  const [loading, setLoading] = useState(true);

  const getData = async () => {
    try {
      await new Promise((resolve) => {
        console.log('Waiting>>>>>>>>>>>>>>>>>>>>>>');
        setTimeout(resolve, 5000); // 10000 milliseconds (10 seconds)
      });
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  });

  return (
    <HomeLayout>
      {loading ? <LandingPageSkeleton /> : <CardListing listings={listings} />}
    </HomeLayout>
  );
}

export async function getServerSideProps() {
  try {
    const apiUrl = `${process.env.API_URL}/listings`;
    const response = await axios.get(apiUrl);

    if (response.status != 200) {
      throw new Error(`Failed to fetch data from API: ${response.status}`);
    }

    const listings = await response.data;

    return {
      props: {
        listings,
      },
    };
  } catch (error) {
    return {
      props: {
        listings: [],
      },
    };
  }
}
