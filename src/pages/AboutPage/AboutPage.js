import AboutMe from '../../components/About/About-me/AboutMe';
import Skills from '../../components/About/Skills/Skills';

import './about-page.css';

const AboutPage = () => {
  return (
    <div className="about">
      <div className="about__wrapper">
        <AboutMe />
        <Skills />
      </div>
    </div>
  )
}

export default AboutPage;

