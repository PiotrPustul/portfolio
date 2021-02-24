import React from 'react';

import {
  NavLink as Link
} from "react-router-dom";

const NavList = ({ handleClick }) => {
  return (
    <ul className="nav__list" >

      <Link to="/" onClick={handleClick}>
        <li className="nav__list-item one">Home</li>
      </Link>

      <Link to="/about" onClick={handleClick}>
        <li className="nav__list-item two">Who I am?</li>
      </Link>

      <Link to="/projects" onClick={handleClick}>
        <li className="nav__list-item">Projects</li>
      </Link>

      <Link to="/contact" onClick={handleClick}>
        <li className="nav__list-item">Contact</li>
      </Link>

    </ul>
  )
}

export default NavList;
