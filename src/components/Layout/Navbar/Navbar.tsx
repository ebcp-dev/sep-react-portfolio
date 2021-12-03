import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

import './Navbar.scss';

import logo from '../../../assets/images/logo.svg';

const Navbar = () => {
  const logoRef = useRef<HTMLImageElement>(null);
  const primaryNavRef = useRef<HTMLDivElement>(null);
  const navLiRef = useRef<HTMLLIElement>(null);

  const [logoHeight, setLogoHeight] = useState(0);
  const [primaryNavHeight, setPrimaryNavHeight] = useState(0);
  const [navLiHeight, setNavLiHeight] = useState(0);

  useEffect(() => {
    setLogoHeight(logoRef.current!.clientHeight);
    setNavLiHeight(navLiRef.current!.clientHeight);
    setPrimaryNavHeight(logoHeight);

    primaryNavRef.current!.style.height = `${primaryNavHeight}px`;
    navLiRef.current!.style.marginTop = `${
      (primaryNavHeight - navLiHeight) / 2
    }px`;
  }, [logoHeight, primaryNavHeight, navLiHeight]);

  return (
    <div className="navigation">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1 text-center">
            <div className="logo">
              <Link to="/">
                <img id="navLogo" src={logo} ref={logoRef} />
              </Link>
            </div>
          </div>
          <div className="col-xs-11 col-sm-11 col-md-11 col-lg-11 text-right">
            <div className="primary-nav" ref={primaryNavRef}>
              <ul>
                <li ref={navLiRef}>
                  <Link to="/">Home</Link>
                </li>
                <li ref={navLiRef}>
                  <Link to="/portfolio">Portfolio</Link>
                </li>
                <li ref={navLiRef}>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
