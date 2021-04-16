import React from 'react';

import { NavLink as Link } from "react-router-dom";

const NavItem = (props) => {
   return (
      <Link
         to={props.path}
         onClick={props.handler}
         className="nav__list-item"
         activeClassName="selected"
         exact={props.exact || null}
      >
         {props.name}
      </Link >
   );
};

export default NavItem;
