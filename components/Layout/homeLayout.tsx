import { ReactHTML, ReactNode } from 'react';
import NavBar from './navBar';
import CategoriesNav from './navBar/categoriesNav';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <main>
        <nav className=''>
          <NavBar />
          <CategoriesNav/>
        </nav>
        {children}
      </main>
    </>
  );
};

export default HomeLayout;
