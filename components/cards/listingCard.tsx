import Link from 'next/link';
import React from 'react';
import { FaHeart } from 'react-icons/fa'; // Import the heart icon

interface ListingCardProps {
  name: string;
  image: string;
  price: number;
  distance: number;
  liked: boolean;
}

const ListingCard: React.FC<ListingCardProps> = ({
  name,
  image,
  price,
  distance,
  liked,
}) => {
  return (
    <>
      <Link href='/listings/1'>
        <div className='max-w-sm h-20 cursor-pointer bg-white border border-gray-200 rounded-lg shadow relative'>
          <>
            <img className='rounded-lg h-52 w-80 object-cover' src={image} alt='' />
            {liked ? (
              <FaHeart className='absolute top-2 right-2 text-red-500 cursor-pointer' />
            ) : (
              <FaHeart className='absolute top-2 right-2 text-gray-800 opacity-70 cursor-pointer' />
            )}
          </>
          <div className='py-5 space-y-2'>
            <div className='text-md font-bold tracking-tight text-gray-900 '>
              {name}
            </div>
            <div className='font-medium text-gray-600'>
              {distance} kilometers away
            </div>
            <div className='font-medium text-gray-600'>
              5 nights . Nov 18 - 23
            </div>
            <div className='text-md  font-medium underline text-gray-950'>
              {price} total before taxes
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default ListingCard;
