import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useGlobalContext } from '../context';
import Links from './Links';

const Navbar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useGlobalContext();
  return (
    <nav className="nav">
      <div className="nav-center">
        <Link to="/" className="title">
          the planets
        </Link>
        <GiHamburgerMenu
          className={`sidebar-btn ${isSidebarOpen && 'active'}`}
          onClick={() => setIsSidebarOpen((oldValue) => !oldValue)}
        />
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
