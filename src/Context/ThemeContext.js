import React, { createContext, useEffect, useReducer, useState } from 'react';

import themeReducer from './ThemeReducer';

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
   const [mode] = useState('light');
   const [themeState, themeDispatch] = useReducer(themeReducer, mode);

   useEffect(() => {
      if (themeState === 'light') {
         console.log('zmieniam na jasny');
         document.body.style.backgroundColor = 'rgb(238, 251, 251)';
         document.body.style.transition = '1s ease-in-out';
      }

      if (themeState === 'dark') {
         console.log('zmieniam na ciemny');
         document.body.style.backgroundColor = 'rgb(18, 35, 46)';
         document.body.style.transition = '1s ease-in-out';
      }
   }, [themeState]);

   return (
      <ThemeContext.Provider value={{ mode, themeState, themeDispatch }}>
         {children}
      </ThemeContext.Provider>
   );
};

export default ThemeProvider;