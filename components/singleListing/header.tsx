import React from 'react';
import { BsHeart, BsStarFill } from 'react-icons/bs';
import { GiTimeTrap } from 'react-icons/gi';
import { IoShareOutline } from 'react-icons/io5';

interface SingleListingHeaderProps {}

const SingleListingHeader: React.FC<SingleListingHeaderProps> = () => {
  return (
    <>
    <div className='px-5'>
      <div className='text-2xl font-bold'>BALIAN TREEHOUSE w beautiful pool</div>
      <div className='flex flex-row justify-between items-center text-sm font-medium'>
        <div className='flex flex-row space-x-2 items-center'>
          <div>
            <BsStarFill />
          </div>
          <div>4.85.</div>
          <ul className='flex flex-row items-center space-x-2'>
            <li className='underline cursor-pointer'>309 reviews</li>
            <GiTimeTrap />

            <li>Superhost</li>
            <li className='underline cursor-pointer'>Balian Beach, Bali, Indonesia</li>
          </ul>
        </div>
        <div className='flex flex-row items-center space-x-4'>
          <div className='flex flex-row justify-between items-center space-x-2 py-2 px-3 cursor-pointer rounded-xl hover:bg-gray-200'>
            <IoShareOutline />
            <span className='underline font-medium'>Share</span>
          </div>
          <div className='flex flex-row justify-between items-center space-x-2 py-2 px-3 cursor-pointer rounded-xl hover:bg-gray-200'>
            <BsHeart />
            <span className='underline font-medium'>Save</span>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SingleListingHeader;
