import React, { useState, useEffect } from 'react';

import NavList from './NavList';
import Socials from './Socials';

const MobileNav = () => {
  const [navBtnActive, setNavBtnActive] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);

  const handleClick = () => setNavBtnActive(prevValue => !prevValue);

  useEffect(() => {
    function updateSize() {
      setScreenWidth(prevValue => window.innerWidth);
    }
    window.addEventListener('resize', updateSize);
    updateSize();

    return screenWidth;
  })

  const showNavBtn = (
    navBtnActive ?
      <span class="fas fa-times" onClick={handleClick}></span>
      :
      <span class="fas fa-bars" onClick={handleClick}></span>
  )

  const showMobileNav = () => {
    if (screenWidth < 992) {
      return showNavBtn;
    } else {
      return null
    }
  }

  return (
    <>
      {/* {screenWidth > 767 ? null : */}
      <nav className="mobile-nav">
        {showMobileNav()}
        {navBtnActive && <NavList
          navBtnActive={navBtnActive}
          handleClick={handleClick}
        />
        }
        {navBtnActive && <Socials />}
      </nav>
      {/* } */}
    </>
  )
}

export default MobileNav;
