import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { SiTwitter, SiMinutemailer, SiGithub } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';

import '../Navbar';

const About = () => (
  <IconContext.Provider value={{ color: '#fff', className: 'pointer' }}>
    <div className="pannel-wrap desktop">
      <h2 className="text-center about-panel">
        Hi!
        {' '}
        <span role="img" aria-label="shaking hand">
          👋🏾
        </span>
      </h2>
      <div className="about-info">
        <p>
          Cryptica is a react application that shows relevant information about
          crypto currencies.
          <br />
          <br />
          You are welcome to contact me using any of the
          means provided below.
          <br />
          <br />
          Developed by
        </p>
        <span>
          <em>Leonmezu</em>
          {' '}
          <span role="img" aria-label="Laptop">
            💻
          </span>
        </span>
      </div>
      <div className="links-container">
        <a href="https://twitter.com/leonmezu">
          <SiTwitter size="30px" />
        </a>
        <a href="https://www.linkedin.com/in/leonardomezlob/">
          <FaLinkedinIn size="30px" />
        </a>
        <a href="https://github.com/leonmezu1">
          <SiGithub size="30px" />
        </a>
        <a href="mailto: leo7xs@gmail.com">
          <SiMinutemailer size="30px" />
        </a>
      </div>
    </div>
  </IconContext.Provider>
);

export default About;