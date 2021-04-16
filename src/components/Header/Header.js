import React from 'react';

import NavList from '../Navigation/NavList';
import Socials from '../Socials/Socials';

const Header = () => {
  return (
    <div className="header">
      <NavList />
      <Socials />
    </div>
  );
};

export default Header;