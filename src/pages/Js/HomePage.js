import React from 'react';

import {
  NavLink as Link
} from "react-router-dom";

import profile from '../../static/images/profile.png';


const HomePage = () => {
  return (
    <div className="home">
      <div className="home__context">
        <h1 className="home__heading">Hello, <br /> It's Piotr here!</h1>
        <Link to="/contact">
          <li className="home__heading-link">Get in touch</li>
        </Link>
      </div>
      {/* <div className="home__img-container">
        <img src={profile} alt="profile img" className="home-img" />
      </div> */}
    </div>
  )
}

export default HomePage;
