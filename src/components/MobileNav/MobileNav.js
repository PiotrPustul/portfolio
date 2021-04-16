import React, { useContext } from 'react';

import { ScreenWidthContext } from '../../Context/ScreenWidthContext';
import Backdrop from '../Backdrop/Backdrop';
import NavList from '../Navigation/NavList';
import Socials from '../Socials/Socials';

const MobileNav = () => {
    const { navBtnActive, screenWidth, handleClick } = useContext(ScreenWidthContext);

    const showNavBtn = navBtnActive ?
        <span className="fas fa-times" onClick={handleClick} /> : <span className="fas fa-bars" onClick={handleClick} />;

    const showMobileNav = () => {
        if (screenWidth < 992) {
            return showNavBtn;
        } else {
            return null
        }
    };

    return (
        <>
            <nav className="mobile-nav">
                {showMobileNav()}
                {navBtnActive && <Backdrop handleClick={handleClick}>
                    <NavList
                        navBtnActive={navBtnActive}
                        handleClick={handleClick}
                    />
                    <Socials />
                </Backdrop>
                }
            </nav>
        </>
    );
};

export default MobileNav;
