import React from 'react';

import NavList from '../Navigation/Nav-List/NavList';
import ModeButton from '../Mode-Button/ModeButton';
import Socials from '../Socials/Socials';

import './header.css';

const Header = () => {
  return (
    <div className="header">
      <ModeButton />
      <NavList />
      <Socials />
    </div>
  );
};

export default Header;