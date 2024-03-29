import { Icon } from '@iconify/react';
import html5Icon from '@iconify-icons/cib/html5';
import css3Icon from '@iconify-icons/cib/css3';
import sassAlt from '@iconify-icons/cib/sass-alt';
import javascriptIcon from '@iconify-icons/cib/javascript';
import typescriptIcon from '@iconify-icons/simple-icons/typescript';
import reactIcon from '@iconify-icons/cib/react';
import reduxIcon from '@iconify-icons/cib/redux';
import nodeIcon from '@iconify-icons/fa-brands/node';
import mysqlIcon from '@iconify-icons/grommet-icons/mysql';
import nestjsIcon from '@iconify-icons/simple-icons/nestjs';
import mongodbIcon from '@iconify-icons/cib/mongodb';
import phpIcon from '@iconify-icons/fontisto/php';


import './skills.css'

const Skills = () => {
  return (
    <div className="about__section">
      <h3 className="about__heading">Skills</h3>
      <div className="about__frontend-section">
        <p className="about__paragraph">
          My greatest pleasure is creating applications in React. I usually style these applications using Sass and while keeping in mind the basic principle of mobile first.
        </p>
        <div className="about__logos-wrapper">
          <Icon className="skills-icon icon-html" icon={html5Icon} width="25" />
          <Icon className="skills-icon icon-css" icon={css3Icon} width="25" />
          <Icon className="skills-icon icon-sass" icon={sassAlt} width="25" />
          <Icon className="skills-icon icon-js" icon={javascriptIcon} width="25" />
          <Icon className="skills-icon icon-ts" icon={typescriptIcon} width="25" />
          <Icon className="skills-icon icon-react" icon={reactIcon} width="25" />
          <Icon className="skills-icon icon-redux" icon={reduxIcon} width="25" />
        </div>
      </div>

      <div className="about__backend-section">
        <p className="about__paragraph">
          Continuous personal development, improving coding and design skills are my main goals. I never limit myself to one solution, so I've been learning the basics of the backend for a while, including PHP, NodeJS, MySQL, Express, MongoDB, NestJS. To become a Full Stack Developer in the future.
        </p>
        <div className="about__logos-wrapper">
          <Icon className="skills-icon icon-php" icon={phpIcon} />
          <Icon className="skills-icon icon-node" icon={nodeIcon} />
          <Icon className="skills-icon icon-mysql" icon={mysqlIcon} />
          <Icon className="skills-icon icon-mongo" icon={mongodbIcon} />
          <Icon className="skills-icon icon-nest" icon={nestjsIcon} />
        </div>
      </div>
    </div>
  );
};

export default Skills;