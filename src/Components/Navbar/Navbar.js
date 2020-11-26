/* eslint-disable no-unused-expressions */

import React, { useState, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { FaTimes, FaLinkedinIn } from 'react-icons/fa';
import { RiMenuUnfoldFill, RiMenuFoldFill } from 'react-icons/ri';
import { BiSearchAlt } from 'react-icons/bi';
import { SiTwitter, SiMinutemailer, SiGithub } from 'react-icons/si';
import { IconContext } from 'react-icons/lib';
import Search from '../Search/Search';
import './Navbar.css';
import { queryActive } from '../../Actions';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(false);
  const [mobile, setMobile] = useState(true);
  const [searchStyle, setSearchStyle] = useState('');

  const ref = useRef();

  const dispatch = useDispatch();

  const handleMenuTrigger = () => setClick(!click);

  const handleSearchTrigger = () => {
    setSearch(!search);
    dispatch(queryActive(!search));
    setTimeout(() => {
      ref.current.focus();
    }, 800);
  };

  const closeMobileMenu = () => setClick(false);

  const mobileLayout = () => {
    window.innerWidth <= 960 ? setMobile(true) : setMobile(false);
  };

  useEffect(() => {
    search ? setSearchStyle('active text-center') : setSearchStyle('w-0');
  }, [search]);

  useEffect(() => {
    mobileLayout();
  }, []);

  window.addEventListener('resize', mobileLayout);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff', className: 'pointer' }}>
        <div className="navbar sticky">
          {mobile ? (
            <>
              <div className="navbar-container-mobile">
                <div
                  className="menu-icon"
                  onClick={handleMenuTrigger}
                  role="presentation"
                >
                  <RiMenuUnfoldFill size="30px" />
                </div>
                <Link
                  to="/"
                  className={`navbar-title-mobile animate__animated .shadowed-text ${
                    search ? 'd-none' : 'animate__zoomIn animate__faster'
                  }`}
                  onClick={closeMobileMenu}
                >
                  Cryptica
                </Link>
                <Search
                  ref={ref}
                  classes={`${searchStyle}`}
                  formClass={`${!search ? 'd-none' : 'd-flex'}`}
                />
                <div className="search-trigger " role="presentation">
                  {search ? (
                    <FaTimes
                      size="30px"
                      className="animate__animated animate__fadeIn"
                      onClick={handleSearchTrigger}
                    />
                  ) : (
                    <BiSearchAlt
                      size="30px"
                      className="animate__animated animate__fadeIn"
                      onClick={handleSearchTrigger}
                    />
                  )}
                </div>
              </div>
              <div
                className={` animate__animated slide-pannel ${
                  click ? 'animate__fadeInLeft active' : 'animate__fadeOutLeft'
                }`}
              >
                {click && (
                  <div className="pannel-wrap">
                    <div className="action-pane d-flex">
                      <Link
                        to="/"
                        className={`navbar-title-mobile animate__animated .shadowed-text ${
                          search ? 'd-none' : 'animate__zoomIn animate__faster'
                        }`}
                        onClick={closeMobileMenu}
                      >
                        Cryptica
                      </Link>
                      <RiMenuFoldFill size="30px" onClick={closeMobileMenu} />
                    </div>
                    <h2 className="text-center about-panel">About</h2>
                    <div className="about-info">
                      <p>
                        Cryptica is a react application that shows relevant
                        information about cryptocurrencies.
                        <br />
                        You are welcome to contact me using any of the means
                        provided below.
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
                )}
              </div>
            </>
          ) : (
            <>
              <div className="navbar-container-desktop container">
                <Link to="/" className="navbar-title-desktop">
                  Cryptica
                </Link>
                <Link to="/about" className="navbar-about">
                  About
                </Link>
                <div
                  className={`search-container-desktop ${
                    search ? 'wide' : null
                  }`}
                >
                  <Search
                    ref={ref}
                    classes={`${searchStyle} text-start`}
                    formClass={`${!search ? 'd-none' : 'd-flex'}`}
                  />
                  <div className="search-trigger " role="presentation">
                    {search ? (
                      <FaTimes
                        size="30px"
                        className="animate__animated animate__fadeIn"
                        onClick={handleSearchTrigger}
                      />
                    ) : (
                      <BiSearchAlt
                        size="30px"
                        className="animate__animated animate__fadeIn"
                        onClick={handleSearchTrigger}
                      />
                    )}
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
