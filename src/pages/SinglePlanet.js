import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router';
import data from '../data.json';
import logo from '../assets/planet-earth.svg';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

const SinglePlanet = () => {
  const { name } = useParams();

  const [planet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [planetImage, setPlanetImage] = useState(null);
  const [planetText, setPlanetText] = useState(null);
  const [planetLink, setPlanetLink] = useState(null);
  const [active, setActive] = useState('overview');

  useEffect(() => {
    setLoading(true);

    const singlePlanet = data.filter((item) => item.name === name);
    setPlanet(singlePlanet);
    setPlanetImage(singlePlanet[0].images.planet);
    setPlanetText(singlePlanet[0].overview.content);
    setPlanetLink(singlePlanet[0].overview.source);
    setLoading(false);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const { rotation, revolution, radius, temperature } = planet[0];

  const toggleContent = (e) => {
    const label = e.target.dataset.label;
    setPlanetText(planet[0][label].content);
    setActive(label);
    setPlanetLink(planet[0][label].source);
  };

  return (
    <main className="planet">
      <div className="planet-img-container">
        <img src={logo} alt="test" className="planet-img" />
      </div>
      <article className="planet-info">
        <h1>{name}</h1>
        <p>{planetText}</p>
        <p className="wiki-link-container">
          Source :
          <a href={planetLink} className="wiki-link" target="_blank">
            Wikipedia
            <BsArrowUpRightSquareFill className="wiki-logo" />
          </a>
        </p>
        <div className="btn-info-container">
          <button
            className={`btn-info ${active === 'overview' ? 'active' : null}`}
            data-label="overview"
            onClick={(e) => toggleContent(e)}
          >
            {' '}
            <span>01</span> overview
          </button>
          <button
            className={`btn-info ${active === 'structure' ? 'active' : null}`}
            data-label="structure"
            onClick={(e) => toggleContent(e)}
          >
            <span>02</span> internal structure
          </button>
          <button
            className={`btn-info ${active === 'geology' ? 'active' : null}`}
            data-label="geology"
            onClick={(e) => toggleContent(e)}
          >
            <span>03</span> surface geology
          </button>
        </div>
      </article>
      <footer className="footer">
        <div className="footer-item">
          <h4>rotation time</h4>
          <h2>{rotation}</h2>
        </div>
        <div className="footer-item">
          <h4>revolution time</h4>
          <h2>{revolution}</h2>
        </div>
        <div className="footer-item">
          <h4>radius</h4>
          <h2>{radius}</h2>
        </div>
        <div className="footer-item">
          <h4>average temp.</h4>
          <h2>{temperature}</h2>
        </div>
      </footer>
    </main>
  );
};

export default SinglePlanet;
