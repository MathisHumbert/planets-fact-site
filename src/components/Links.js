import React from 'react';
import data from '../data.json';
import { Link } from 'react-router-dom';

const Links = () => {
  return (
    <ul className="links">
      {data.map((item, index) => {
        return (
          <li key={index} className="nav-links">
            <Link to={`/planet/${item.name}`}>{item.name}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
