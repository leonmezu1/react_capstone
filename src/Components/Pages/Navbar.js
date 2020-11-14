/* eslint-disable no-unused-expressions */

import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import { RiMenuUnfoldFill } from 'react-icons/ri';
import { BiSearchAlt } from 'react-icons/bi';
import { IconContext } from 'react-icons/lib';
import Search from './Search';
import './Navbar.css';

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [search, setSearch] = useState(false);
  const [mobile, setMobile] = useState(true);
  const [searchStyle, setSearchStyle] = useState('');

  const ref = useRef();

  const handleMenuTrigger = () => setClick(!click);

  const handleSearchTrigger = () => {
    setSearch(!search);
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
        <div className="navbar">
          {mobile ? (
            <>
              <div className="navbar-container-mobile">
                <div
                  className="menu-icon"
                  onClick={handleMenuTrigger}
                  role="presentation"
                >
                  {click ? <FaTimes /> : <RiMenuUnfoldFill size="30px" />}
                </div>
                <Link
                  to="/"
                  className={`navbar-title-mobile animate__animated ${
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
            </>
          ) : (
            <>
              <div className="navbar-container-desktop container">
                <Link to="/" className="navbar-title-desktop">
                  Cryptica
                </Link>
                <Link to="/" className="navbar-about">
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
                  <BiSearchAlt
                    size="30px"
                    className="animate__animated animate__fadeIn"
                    onClick={handleSearchTrigger}
                  />
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
