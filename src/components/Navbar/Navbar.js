import React from "react";
import { Link, NavLink } from "react-router-dom";

import { BiSearch, BiUser, BiShoppingBag } from "react-icons/bi";
import { IconContext } from "react-icons/lib";

import "./Navbar.css";

function Navbar() {
  return (
    <>
      <IconContext.Provider value={{ size: "1.4em", color: "#929292" }}>
        <div className="navbar">
          <div className="navbar-container container">
            <Link className="navbar-logo">NewHood</Link>
            <div className="navbar-center">
              <ul className="nav-menu">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    exact
                    className="nav-links"
                    activeClassName="active"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/men"
                    className="nav-links"
                    activeClassName="active"
                  >
                    Men
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/women"
                    className="nav-links"
                    activeClassName="active"
                  >
                    Women
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/pages"
                    className="nav-links"
                    activeClassName="active"
                  >
                    Pages
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/blog"
                    className="nav-links"
                    activeClassName="active"
                  >
                    Blog
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/contact"
                    className="nav-links"
                    activeClassName="active"
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="navbar-left">
              <BiSearch className="navbar-icon" />
              <BiUser className="navbar-icon" />
              <BiShoppingBag className="navbar-icon" />
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
