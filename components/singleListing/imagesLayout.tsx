import Image from 'next/image';
import React from 'react';

interface ImagesLayoutProps {}

const ImagesLayout: React.FC<ImagesLayoutProps> = () => {
  const images = [
    { id: 1, path: '/images/listing/image4.webp' },
    { id: 1, path: '/images/listing/image5.webp', className: 'rounded-tr-xl' },
    { id: 1, path: '/images/listing/image6.webp' },
    { id: 1, path: '/images/listing/image7.webp', className: 'rounded-br-xl' },
  ];
  return (
    <>
      <div className='grid grid-flow-row grid-cols-2 gap-2 p-5'>
        <img
          src='/images/listing/image3.webp'
          alt='image'
          className='row-span-2 rounded-l-xl h-full w-full'
        />
        <div className='grid grid-flow-row grid-cols-2 gap-2'>
          {images.map((image) => (
            <img
              src={image.path}
              alt='image'
              className={`${image.className && image.className} h-full w-full`}
            />
          ))}{' '}
        </div>
      </div>
    </>
  );
};

export default ImagesLayout;
