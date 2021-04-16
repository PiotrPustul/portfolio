import React from 'react';

const Arrows = ({ goLeft, goRight }) => {
   return (
      <>
         <div className="arrow-left" >
            <span className="fas fa-arrow-left" onClick={goLeft}></span>
         </div>
         <div className="arrow-right">
            <span className="fas fa-arrow-right" onClick={goRight}></span>
         </div>
      </>
   );
}

export default Arrows;
