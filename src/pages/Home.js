import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="home">
      <h1>Welcome to THE PLANETS fact site</h1>
      <p>
        Click on one of the planet's link to learn more about each of these
        planets!
      </p>
      <p>
        Learn more about{' '}
        <Link to="/planet/Earth" class="home-link">
          Our Planet
        </Link>
      </p>
    </main>
  );
};

export default Home;
