import React, { useContext } from 'react';

import ReactDOM from 'react-dom';

import { ThemeContext } from '../../Context/ThemeContext';

import '../../style.css';
import './backdrop.css';

const Backdrop = (props) => {
   const { themeState } = useContext(ThemeContext);

   return (
      ReactDOM.createPortal(
         <div className={`backdrop ${themeState}`} onClick={props.handleClick}>
            {props.children}
         </div>
         ,
         document.getElementById('backdrop-root')
      )
   );
};

export default Backdrop;


