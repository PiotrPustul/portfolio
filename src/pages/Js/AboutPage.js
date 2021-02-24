import React from 'react';

import profileImg from '../../static/images/about1.png';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about__me">
        <h3 className="about-heading">who I am?</h3>
        <p className="about-paragraphs">
          My name is Piotr Pustul. I'm 29 years old and I was born in the south of Poland in Czestochowa. I moved to the Uk in July 2018.
          </p>
        <p className="about-paragraphs">
          I have been constantly learning about the world of web development for over a year. Since then I have learned a lot and coding has become my passion. I have been consolidating my knowledge by implementing my own projects. During this time I discovered that this is something I would like to professionally in my life. My main goals are continuous personal development and improvement of coding and design skills by implementing fascinating projects.
        </p>
        <p className="about-paragraphs">
          When I'm not working, I love spend some time in the kitchen cooking, doing physical and mental exercises playing chess, reading books, working out at the gym, swimming at the pool.
        </p>
        <p className="about-paragraphs">
          <span>Current location :</span> locked down in <span>London</span>, United Kingdom.</p>
      </div>
      <div className="about__picture">
        {/* <div></div> */}
        <img src={profileImg} alt="profile img" />
      </div>
    </div>
  )
}

export default AboutPage;
