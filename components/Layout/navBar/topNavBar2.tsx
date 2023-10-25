import React, { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BiGlobe } from 'react-icons/bi';
import { RxHamburgerMenu } from 'react-icons/rx';

interface TopNavBar2Props {
  children: ReactNode;
}

const navItems = [
  {
    id: 1,
    label: 'Stays',
    path: '#',
    activeClass: 'text-gray-800 font-medium text-md',
  },
  {
    id: 2,
    label: 'Experience',
    path: '#',
  },
  {
    id: 3,
    label: 'Online Experiences',
    path: '#',
  },
];

const TopNavBar2: React.FC<TopNavBar2Props> = ({ children }) => {
  return (
    <div className='flex flex-col place-items-center space-y-20 border-b pb-24'>
      <div className='p-4 w-full grid grid-flow-row grid-cols-3 absolute top-0 items-center'>
        <Link href={'/'}>
        <Image alt='Airbnb' src={'/images/logo.png'} width={105} height={100} className='ml-10' />
        </Link>
        <div className='flex flex-row items-center space-x-8 justify-self-center'>
        {children}
        </div>
        <div className='flex flex-row items-center space-x-4 justify-self-end'>
          <div className='rounded-full text-sm font-medium px-4 py-2 hover:bg-gray-200 hover:cursor-pointer'>
            Airbnb your home
          </div>
          <div className='text-gray-800 rounded-full px-2 py-2 hover:bg-gray-200 hover:cursor-pointer'>
            <BiGlobe />
          </div>
          <div className='flex flex-row items-center border space-x-4 border-gray-200 py-2 px-3 rounded-full hover:shadow-lg hover:cursor-pointer'>
            <>
              <RxHamburgerMenu />
            </>
            <div className='text-gray-100 w-10 h-10 rounded-full bg-slate-900 flex justify-center items-center'>
              A
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNavBar2;
