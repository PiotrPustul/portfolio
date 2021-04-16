import React, { createContext, useEffect, useState } from 'react';

export const ScreenWidthContext = createContext();

const ScreenWidthProvider = ({ children }) => {
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
   }, [screenWidth]);

   return (
      <ScreenWidthContext.Provider value={{ navBtnActive, screenWidth, handleClick }}>
         {children}
      </ScreenWidthContext.Provider>
   );
}

export default ScreenWidthProvider;
