import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <div className="nav-center">
        <Link to="/">the planets</Link>
      </div>
    </nav>
  );
};

export default Navbar;
