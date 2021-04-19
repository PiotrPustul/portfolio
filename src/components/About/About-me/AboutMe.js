import React from 'react';

const AboutMe = () => {
   return (
      <div className="about__section">
         <h3 className="about__heading">Who I am?</h3>
         <p className="about__paragraph">
            My name is Piotr Pustul. I'm 29 years old and I was born in the south of Poland in Czestochowa. I moved to the UK in July 2018.
         </p>
         <p className="about__paragraph">
            Over a year I've been constantly exploring the world of web development. Since then, I've learned a lot and coding has become my passion. I consolidated my knowledge by implementing my own projects. During this time, I discovered that this was something I wanted to pursue professionally in my life. My main goal is to continuously develop myself and improve my coding and design skills through exciting projects.
         </p>
         <p className="about__paragraph">
            <span>Current location :</span> locked down in <span>London</span>, United Kingdom.
         </p>
      </div>
   );
}

export default AboutMe;