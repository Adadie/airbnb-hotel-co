import { ReactNode } from 'react';
import SingleListingNavBar from './navBar/singleListingNavBar';

interface SingleListingLayoutProps {
  children: ReactNode;
}

const SingleListingLayout: React.FC<SingleListingLayoutProps> = ({ children }) => {
  return (
    <>
      <main>
        <nav className=''>
          <SingleListingNavBar />
          {/* <CategoriesNav /> */}
        </nav>
        {children}
      </main>
    </>
  );
};

export default SingleListingLayout;
