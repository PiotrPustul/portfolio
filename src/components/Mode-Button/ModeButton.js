import React, { useContext } from 'react';

import { ThemeContext } from '../../Context/ThemeContext';

import './mode-button.css';

const ModeButton = () => {
   const { themeDispatch } = useContext(ThemeContext);

   const handlerMode = (e) => {
      const input = document.querySelector('.checkbox');

      if (!input.checked) {
         themeDispatch({ type: 'LIGHT', mode: 'light' });
      }

      if (input.checked) {
         themeDispatch({ type: 'DARK', mode: 'dark' });
      }
   };

   return (
      <div className="mode-button" onClick={handlerMode}>
         <input type="checkbox" className="checkbox" id="checkbox" />
         <label htmlFor="checkbox" className="label" >
            <i className="fas fa-moon"></i>
            <i className="fas fa-sun"></i>
            <div className="ball"></div>
         </label>
      </div>
   );
};

export default ModeButton;
