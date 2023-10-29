import React from 'react';
import ListingCard from './listingCard';
import { Listing } from '@/types/listing';

interface CardListingProps {
  listings: Listing[];
}

const listingItems = [
  {
    id: 1,
    image: '/images/listing/image7.webp',
    name: 'Balina Beach, Indonesia',
    distance: '12,900',
    price: '$1,098',
    liked: true,
  },
  {
    id: 2,
    image: '/images/listing/image1.webp',
    name: 'Sisily',
    distance: '12,900',
    price: '$990',
    liked: false,
  },
  {
    id: 3,
    image: '/images/listing/image2.webp',
    name: 'Turkey',
    distance: '12,900',
    price: '$990',
    liked: false,
  },
  {
    id: 4,
    image: '/images/listing/image8.webp',
    name: 'Abiansemal, Indonesia',
    distance: '12,900',
    price: '$990',
    liked: true,
  },
  {
    id: 5,
    image: '/images/listing/image2.webp',
    name: 'Turkey',
    distance: '12,900',
    price: '$990',
    liked: false,
  },
  {
    id: 6,
    image: '/images/listing/image1.webp',
    name: 'Sisily',
    distance: '12,900',
    price: '$990',
    liked: false,
  },
  {
    id: 7,
    image: '/images/listing/image7.webp',
    name: 'Balina Beach, Indonesia',
    distance: '12,900',
    price: '$1,098',
    liked: true,
  },
  {
    id: 8,
    image: '/images/listing/image1.webp',
    name: 'Sisily',
    distance: '12,900',
    price: '$990',
    liked: false,
  },
  {
    id: 9,
    image: '/images/listing/image8.webp',
    name: 'Abiansemal, Indonesia',
    distance: '12,900',
    price: '$990',
    liked: true,
  },
  {
    id: 10,
    image: '/images/listing/image7.webp',
    name: 'Balina Beach, Indonesia',
    distance: '12,900',
    price: '$1,098',
    liked: true,
  },
  {
    id: 11,
    image: '/images/listing/image1.webp',
    name: 'Sisily',
    distance: '12,900',
    price: '$990',
    liked: false,
  },
  {
    id: 12,
    image: '/images/listing/image2.webp',
    name: 'Turkey',
    distance: '12,900',
    price: '$990',
    liked: false,
  },
];
const CardListing: React.FC<CardListingProps> = ({ listings }) => {
  return (
    <div className='w-full p-4'>
      <div className='grid grid-row grid-cols-4 gap-10 gap-y-96'>
        {listings &&
          listings.length > 0 &&
          listings.map((item, index) => (
            <div key={index}>
              <ListingCard
                liked={item.liked}
                name={item.location}
                image={item.image}
                distance={item.distance}
                price={item.price}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardListing;
