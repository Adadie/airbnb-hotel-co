import { ReactHTML, ReactNode } from 'react';
import NavBar from './navBar';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <>
      <main>
        <nav className='mb-24'>
          <NavBar />
        </nav>
        {children}
      </main>
    </>
  );
};

export default HomeLayout;
