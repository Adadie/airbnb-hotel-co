import React from 'react';
import ListingCard from './listingCard';

interface CardListingProps {}

const CardListing: React.FC<CardListingProps> = () => {
  return (
    <div className='w-full p-4'>
    <div className='grid grid-row grid-cols-4 gap-10 gap-y-96'>
        {new Array(20).fill(undefined).map((_, index) => (
            <div key={index}>
          <ListingCard />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardListing;
