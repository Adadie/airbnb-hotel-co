import Image from 'next/image';
import React from 'react';

const NavBar = () => {
  return (
    <>
      <div className='flex flex-row justify-between'>
        <Image alt='Airbnb' src={'/images/logo.png'} width={80} height={80} />
      </div>
    </>
  );
};
