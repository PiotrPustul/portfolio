import React from 'react';

import Button from '../../Button/Button';

const Project = ({ x, img, heading, description, githubLink, liveLink }) => {
   return (
      <div className="project" style={{ transform: `translateX(${x}%)` }}>

         <div className="project__img-container" >
            <img className="project__img" src={img} alt={heading} />
         </div>

         <div className="project__description">
            <h2 className="project__description-heading">
               {heading}</h2>
            <p className="project__description-paragraph">
               {description}
            </p>
            <div className="project__description-buttons">
               <Button class="link__btn link__btn--margin-r">
                  <a
                     href={githubLink}
                     target="_blank"
                     rel="noreferrer"
                  >Code
                  </a>
               </Button>
               <Button class="link__btn link__btn--margin-l">
                  <a
                     href={liveLink}
                     target="_blank"
                     rel="noreferrer"
                  >Live
                  </a>
               </Button>
            </div>
         </div>

      </div>
   );
};

export default Project;
