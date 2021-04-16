import React from 'react';

import Project from './Project/Project';

const ProjectsList = ({ projects, x }) => {
   const ListProducts = projects.map((el, index) => {
      return (
         <Project
            key={index}
            x={x}
            img={el.img}
            heading={el.heading}
            description={el.description}
            githubLink={el.githubLink}
            liveLink={el.liveLink}
         />
      );
   });

   return (
      <>
         {ListProducts}
      </>
   );
};

export default ProjectsList;