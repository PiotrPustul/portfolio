import React, { useState } from 'react';

import ModeButton from '../Mode-Button/ModeButton';
import Backdrop from '../Backdrop/Backdrop';
import NavList from '../Navigation/Nav-List/NavList';
import Socials from '../Socials/Socials';

import '../Navigation/Nav-List/nav-list.css';
import '../Navigation/Nav-Item/nav-item.css';
import './mobile-nav.css';
import '../Socials/socials.css';

const MobileNav = () => {
    const [navBtnActive, setNavBtnActive] = useState(false);

    const handleClick = () => setNavBtnActive(prevValue => !prevValue);
    return (
        <>
            <ModeButton />
            <nav className="mobile-nav">
                {navBtnActive ?
                    <span className="close-icon fas fa-times" onClick={handleClick} /> :
                    <span className="open-icon fas fa-bars" onClick={handleClick} />
                }
                {navBtnActive &&
                    <Backdrop handleClick={handleClick}>
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
