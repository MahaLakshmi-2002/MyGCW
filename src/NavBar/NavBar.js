import React, { useState } from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';

const NavBar = () => {
  const [clickedLink, setClickedLink] = useState(null);

  const handleClick = (linkName) => {
    setClickedLink(linkName);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">
      <li className="navbar-item">
          <Link
            to="/StartUps"
            className={`navbar-link ${clickedLink === 'startups' ? 'clicked' : ''}`}
            onClick={() => handleClick('For Startups')}
          >
            For Startups
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/Professionals"
            className={`navbar-link ${clickedLink === 'professionals' ? 'clicked' : ''}`}
            onClick={() => handleClick('professionals')}
          >
            For Professionals
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/Investors"
            className={`navbar-link ${clickedLink === 'investors' ? 'clicked' : ''}`}
            onClick={() => handleClick('investors')}
          >
            For Investors
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/what-the-frontrunners-say"
            className={`navbar-link ${clickedLink === 'frontrunners' ? 'clicked' : ''}`}
            onClick={() => handleClick('frontrunners')}
          >
            What Frontrunners Say
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/climate-change-facts"
            className={`navbar-link ${clickedLink === 'climate-change-facts' ? 'clicked' : ''}`}
            onClick={() => handleClick('climate-change-facts')}
          >
            Climate Change Facts
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/clean-technologies"
            className={`navbar-link ${clickedLink === 'clean-technologies' ? 'clicked' : ''}`}
            onClick={() => handleClick('clean-technologies')}
          >
            Clean Technologies
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/startup-trends"
            className={`navbar-link ${clickedLink === 'startup-trends' ? 'clicked' : ''}`}
            onClick={() => handleClick('startup-trends')}
          >
            StartUp Trends
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/net-zero-and-carbon-neutral"
            className={`navbar-link ${clickedLink === 'net-zero-and-carbon-neutral' ? 'clicked' : ''}`}
            onClick={() => handleClick('net-zero-and-carbon-neutral')}
          >
            NetZero and Carbon Neutral
          </Link>
        </li>

        <li className="navbar-item">
          <Link
            to="/cost-of-climate-change"
            className={`navbar-link ${clickedLink === 'cost-of-climate-change' ? 'clicked' : ''}`}
            onClick={() => handleClick('cost-of-climate-change')}
          >
            Cost of Climate Change
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/"
            className={`navbar-link ${clickedLink === '' ? 'clicked' : ''}`}
            onClick={() => handleClick('')}
          >
            
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/"
            className={`navbar-link ${clickedLink === '' ? 'clicked' : ''}`}
            onClick={() => handleClick('')}
          >
            
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/"
            className={`navbar-link ${clickedLink === '' ? 'clicked' : ''}`}
            onClick={() => handleClick('')}
          >
            
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
