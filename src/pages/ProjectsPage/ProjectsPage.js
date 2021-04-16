import React, { useState } from 'react';

import myProjects from '../../components/Projects/ProjectsData';
import ProjectsList from '../../components/Projects/ProjectsList';
import Arrows from '../../components/Projects/ProjectArrows/Arrows';

const ProjectsPage = () => {
  const [projects] = useState(myProjects);
  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (projects.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (projects.length - 1) ? setX(0) : setX(x - 100);
  };

  return (
    <div className="projects">
      <ProjectsList projects={projects} x={x} />
      <Arrows goLeft={goLeft} goRight={goRight} />
    </div>
  );
};

export default ProjectsPage;