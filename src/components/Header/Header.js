import React from 'react';

import { Breakpoint } from 'react-socks';

import MobileNav from '../MobileNav/MobileNav';
import NavList from '../Navigation/Nav-List/NavList';
import ModeButton from '../Mode-Button/ModeButton';
import Socials from '../Socials/Socials';

const Header = () => {
  return (
    <>
      <Breakpoint customQuery="(max-width: 991px)">
        <div className="header-mobile">
          <MobileNav />
        </div>
      </Breakpoint>
      <Breakpoint customQuery="(min-width: 992px)">
        <div className="header-desktop">
          <ModeButton />
          <NavList />
          <Socials />
        </div>
      </Breakpoint>
    </>
  );
};

export default Header;