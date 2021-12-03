import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import SinglePlanet from './pages/SinglePlanet';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/plante/:id" element={<SinglePlanet />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
