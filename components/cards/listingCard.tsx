import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Import the heart icon

interface ListingCardProps {}

const ListingCard: React.FC<ListingCardProps> = () => {
  return (
    <>
      <Link href='/listings/1'>
        <div className='max-w-sm h-20 cursor-pointer bg-white border border-gray-200 rounded-lg shadow relative'>
          <>
            <img
              className='rounded-t-lg'
              src='/images/listing/image6.webp'
              alt=''
            />
            <FaHeart className='absolute top-2 right-2 text-red-500 cursor-pointer' />
          </>
          <div className='p-5 space-y-2'>
            <div className='text-md font-bold tracking-tight text-gray-900 '>
              BALIAN TREEHOUSE w beautiful pool
            </div>
            <div className='font-medium text-gray-600'>
              7,000 kilometers away
            </div>
            <div className='font-medium text-gray-600'>
              5 nights . Nov 18 - 23
            </div>
            <div className='text-md  font-medium underline text-gray-950'>
              $1,078 total before taxes
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ListingCard;
