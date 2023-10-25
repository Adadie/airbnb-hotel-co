import React from 'react';
import SingleListingHeader from './header';
import ImagesLayout from './imagesLayout';

interface SingleListingProps {
    
}
 
const SingleListing: React.FC<SingleListingProps> = () => {
    return ( <div className='px-20 py-5'>
    <SingleListingHeader/>
    <ImagesLayout/>
    </div> );
}
 
export default SingleListing;