import React from 'react';
import CardSkeleton from './card';

interface LandingPageSkeletonProps {}

const LandingPageSkeleton: React.FC<LandingPageSkeletonProps> = () => {
  return (
    <>
      <div className='flex flex-col space-y-10'>
        <div className='grid grid-flow-row grid-cols-4 gap-10'>
          {new Array(12).fill(undefined).map((_, index) => (
            <>
              <CardSkeleton key={index} />
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default LandingPageSkeleton;
