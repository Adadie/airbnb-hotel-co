import HomeLayout from '@/components/Layout/homeLayout';
import CardListing from '@/components/cards/cardListing';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Listing } from '@/types/listing';
import LandingPageSkeleton from '@/components/skeletons/landingPage';
import { useInView } from 'react-intersection-observer';
import SpinnerComponent from '@/components/spinner';

export default function Home({
  initialListings,
}: {
  initialListings: Listing[];
}) {
  const [listings, setListings] = useState(initialListings);
  const [loading, setLoading] = useState(true);
  const { ref, inView } = useInView();

  const fetchMoreData = async () => {
    const apiUrl = `https://6539a576e3b530c8d9e8909c.mockapi.io/api/listings`;

    try {
      const response = await axios.get(apiUrl);

      if (response.status !== 200) {
        throw new Error(`Failed to fetch data from API: ${response.status}`);
      }
      const newListingData = response.data;
      setListings((prevListings) => [...prevListings, ...newListingData]);
    } catch (error) {
      console.error('Error fetching more data:', error);
    }
  };

  const getData = async () => {
    try {
      await new Promise((resolve) => {
        setTimeout(resolve, 5000);
      });
      setLoading(false);
    } catch (error) {}
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    if (inView && !loading) {
      fetchMoreData();
    }
  }, [inView]);

  return (
    <HomeLayout>
      {loading ? (
        <LandingPageSkeleton />
      ) : (
        <div>
          <CardListing listings={listings} />
          <div className='flex flex-row justify-center mt-96'>
            <div className='text-lg font-bold' ref={ref}>
              {!loading && <SpinnerComponent />}
            </div>
          </div>
        </div>
      )}
    </HomeLayout>
  );
}

export async function getServerSideProps() {
  try {
    const apiUrl = `${process.env.API_URL}/listings`;
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error(`Failed to fetch data from API: ${response.status}`);
    }

    const initialListings = response.data;

    return {
      props: {
        initialListings,
      },
    };
  } catch (error) {
    return {
      props: {
        initialListings: [],
      },
    };
  }
}
