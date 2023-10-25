import { Inter } from 'next/font/google';
import SingleListing from '@/components/singleListing';
import SingleListingLayout from '@/components/Layout/SingleListingLayout';

const inter = Inter({ subsets: ['latin'] });

const Home= ()=> {
  return (
    <SingleListingLayout>
      <SingleListing/>
    </SingleListingLayout>
  );
}

export default Home;