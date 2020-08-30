import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FaBars, FaTimes } from "react-icons/fa";
import { BiSearch, BiUser, BiShoppingBag } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ size: "1.4em", color: "#929292" }}>
        <div className="navbar">
          <div className="navbar__container container">
            <Link className="navbar__logo">NewHood</Link>
            <div className="navbar-center">
              <div className="navbar__icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </div>
              <ul className={click ? "navbar__menu active" : "navbar__menu"}>
                <li className="navbar__item">
                  <NavLink
                    to="/"
                    exact
                    className="navbar__links"
                    activeClassName="navbar__links--active"
                    onClick={closeMobileMenu}
                  >
                    Home
                  </NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink
                    to="/men"
                    className="navbar__links"
                    activeClassName="navbar__links--active "
                    onClick={closeMobileMenu}
                  >
                    Men
                  </NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink
                    to="/women"
                    className="navbar__links"
                    activeClassName="navbar__links--active"
                    onClick={closeMobileMenu}
                  >
                    Women
                  </NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink
                    to="/pages"
                    className="navbar__links"
                    activeClassName="navbar__links--active"
                    onClick={closeMobileMenu}
                  >
                    Pages
                  </NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink
                    to="/blog"
                    className="navbar__links"
                    activeClassName="navbar__links--active"
                    onClick={closeMobileMenu}
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="navbar__item">
                  <NavLink
                    to="/contact"
                    className="navbar__links"
                    activeClassName="navbar__links--active"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className={click ? "navbar__left active" : "navbar__left"}>
              <BiSearch className="navbar__icons" />
              <BiUser className="navbar__icons" />
              <BiShoppingBag className="navbar__icons" />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
