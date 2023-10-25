import TopNavBar from './topNavBar';
import Search from './search';

const NavBar: React.FC = () => {
  return (
    <TopNavBar>
      <Search />
    </TopNavBar>
  );
};

export default NavBar;
