import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <section className="error-page">
      <h1>oop! it's a dead end</h1>
      <Link to="/" className="error-link">
        back home
      </Link>
    </section>
  );
};

export default Error;
