import React from 'react';

import './arrows.css';

const Arrows = ({ goLeft, goRight }) => {
   return (
      <>
         <div className="arrow-container arrow-container--left" >
            <span className="arrow-img fas fa-arrow-left" onClick={goLeft}></span>
         </div>
         <div className="arrow-container arrow-container--right">
            <span className="arrow-img fas fa-arrow-right " onClick={goRight}></span>
         </div>
      </>
   );
}

export default Arrows;
