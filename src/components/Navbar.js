import React from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useGlobalContext } from '../context';

const Navbar = () => {
  const value = useGlobalContext();
  console.log(value);

  return (
    <nav>
      <div className="nav-center">
        <Link to="/">the planets</Link>
        <GiHamburgerMenu />
      </div>
    </nav>
  );
};

export default Navbar;
