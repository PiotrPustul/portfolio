import React from 'react';

import { NavLink as Link } from "react-router-dom";

import Button from '../../components/Button/Button';
import homeProfile from '../../static/images/profile.png';

import './home-page.css';

const HomePage = () => {
  return (
    <div className="home">

      <div className="home__context">
        <h1 className="home__heading">
          Hello, <br />
          It's Piotr here!
        </h1>
        <Button class="link__btn">
          <Link to="/contact">Get in touch </Link>
        </Button>
      </div>

      <div className="home__img-container">
        <img src={homeProfile} alt="profile img" className="home__img" />
      </div>
    </div>
  );
};

export default HomePage;
