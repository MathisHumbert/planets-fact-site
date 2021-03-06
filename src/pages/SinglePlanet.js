import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import data from '../data.json';
import { BsArrowUpRightSquareFill } from 'react-icons/bs';

const SinglePlanet = () => {
  const { name } = useParams();

  const [planet, setPlanet] = useState([]);
  const [loading, setLoading] = useState(true);
  const [planetImage, setPlanetImage] = useState(null);
  const [planetSubImage, setPlanetSubImage] = useState(false);
  const [planetText, setPlanetText] = useState(null);
  const [planetLink, setPlanetLink] = useState(null);
  const [active, setActive] = useState('');

  useEffect(() => {
    setLoading(true);

    const singlePlanet = data.filter((item) => item.name === name);
    setPlanet(singlePlanet[0]);
    setPlanetImage(singlePlanet[0].images.planet);
    setPlanetSubImage(false);
    setPlanetText(singlePlanet[0].overview.content);
    setPlanetLink(singlePlanet[0].overview.source);
    setActive('overview');
    setLoading(false);
  }, [name]);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  const { rotation, revolution, radius, temperature } = planet;

  const toggleContent = (e) => {
    const label = e.target.dataset.label;
    setPlanetText(planet[label].content);
    setActive(label);
    setPlanetLink(planet[label].source);

    if (label === 'overview') {
      setPlanetImage(planet.images.planet);
      setPlanetSubImage(false);
    } else if (label === 'structure') {
      setPlanetImage(planet.images.internal);
      setPlanetSubImage(false);
    } else {
      setPlanetImage(planet.images.planet);
      setPlanetSubImage(true);
    }
  };

  return (
    <main className="planet">
      <div className="planet-img-container">
        <img src={planetImage} alt="planet-img" className="planet-img" />
        {planetSubImage && (
          <img
            src={planet.images.geology}
            alt="sub-planet-img"
            className="sub-planet-img"
          />
        )}
      </div>
      <article className="planet-info">
        <div className="info-container">
          <h1>{name}</h1>
          <p>{planetText}</p>
          <p className="wiki-link-container">
            Source :
            <a
              href={planetLink}
              className="wiki-link"
              target="_blank"
              rel="noreferrer"
            >
              Wikipedia
              <BsArrowUpRightSquareFill className="wiki-logo" />
            </a>
          </p>
        </div>
        <div className="btn-info-container">
          <button
            className={`btn-info ${
              active === 'overview' ? 'active' : null
            } ${name}`}
            data-label="overview"
            onClick={(e) => toggleContent(e)}
          >
            {' '}
            <span>01</span> overview
          </button>
          <button
            className={`btn-info ${
              active === 'structure' ? 'active' : null
            } ${name}`}
            data-label="structure"
            onClick={(e) => toggleContent(e)}
          >
            <span>02</span> internal structure
          </button>
          <button
            className={`btn-info ${
              active === 'geology' ? 'active' : null
            } ${name}`}
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
