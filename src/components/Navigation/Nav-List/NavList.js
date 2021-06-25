import NavItem from '../Nav-Item/NavItem';

import './nav-list.css';

const NavList = ({ handleClick }) => {
  return (
    <ul className="nav__list" >
      <NavItem
        path="/"
        onClick={handleClick}
        exact={true}
        name="Home"
      />
      <NavItem
        path="/projects"
        onClick={handleClick}
        name="Projects"
      />
      <NavItem
        path="/about"
        onClick={handleClick}
        name="About"
      />
      <NavItem
        path="/contact"
        onClick={handleClick}
        name="Contact"
      />
    </ul>
  )
}

export default NavList;