import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const { setIsSidebarOpen } = useGlobalContext();
  return (
    <nav>
      <div className="nav-center">
        <Link to="/">the planets</Link>
        <GiHamburgerMenu
          className="sidebar-btn"
          onClick={() => setIsSidebarOpen((oldValue) => !oldValue)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
