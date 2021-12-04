import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import SinglePlanet from './pages/SinglePlanet';
import Error from './pages/Error';

// components
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';

import backgroundLogo from './background-stars.svg';

function App() {
  return (
    <Router>
      <div>
        <img
          src={backgroundLogo}
          alt="background-logo"
          className="background-logo"
        />
      </div>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/planet/:name" element={<SinglePlanet />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
