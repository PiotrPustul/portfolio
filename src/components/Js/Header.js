import React from 'react';

import NavList from '../../components/Js/NavList';
import Socials from './Socials';

const Header = () => {
  return (
    <div className="header">
      <NavList />
      <Socials />
    </div>
  )
}

export default Header;