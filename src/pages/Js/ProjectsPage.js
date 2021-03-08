import React, { useState } from 'react';

import imgRestaurant from "../../static/images/bookATable.png";
import imgPlanner from "../../static/images/planYourMeal.png";
import imgPortfolio from "../../static/images/portfolio.png";

const ProjectsPage = () => {
  const projects = [
    {
      img: imgRestaurant,
      heading: "Restaurant Page",
      description: "The application allows you to book a table in a restaurant, with the additional function of choosing exactly the one that interests us, not counting on luck that the host will choose the best for us.",
      githubLink: "https://github.com/pepe199111/restaurant-reservation/tree/main/restaurant",
      liveLink: "https://pepe199111.github.io/restaurant-reservation/#/",
    },
    {
      img: imgPlanner,
      heading: "Plan your meal",
      description: "This is an application that allows us to plan meals for a given day and week. This is my first project that I worked on together with others programmers, during the course at Coders Lab school, the project was conducted using the Scrum method and JSON server.",
      githubLink: "https://github.com/pepe199111/Nutrition",
      liveLink: "https://pepe199111.github.io/Nutrition/#/",
    },
    {
      img: imgPortfolio,
      heading: "Portfolio",
      description: "The page you are currently on. I have posted some information about me along with my projects. I hope you like it.",
      githubLink: "https://github.com/pepe199111/Piotr-Pustul-Portfolio",
      liveLink: "https://pepe199111.github.io/Piotr-Pustul-Portfolio/#/",
    },
  ];

  const [x, setX] = useState(0);

  const goLeft = () => {
    x === 0 ? setX(-100 * (projects.length - 1)) : setX(x + 100);
  };

  const goRight = () => {
    x === -100 * (projects.length - 1) ? setX(0) : setX(x - 100);
  };

  const showProjects = projects.map(project => {
    return (
      <div key={project.heading} className="projects__wrapper" style={{ transform: `translateX(${x}%)` }}>
        <div className="projects__img-container">
          <img className="projects__img" src={project.img} alt={project.heading}
          />
        </div>
        <div className="projects__content">
          <h2 className="projects__content-heading">
            {project.heading}</h2>
          <p className="projects__content-paragraphs">
            {project.description}
          </p>
          <div className="projects__content-buttons">
            <button className="projects-btn">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer">Code</a>
            </button>
            <button className="projects-btn">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
              >Live
              </a>
            </button>
          </div>
        </div>
      </div>)
  })

  return (
    <div className="projects">
      {showProjects}
      <div className="arrow-left" >
        <span className="fas fa-arrow-left" onClick={goLeft}></span>
      </div>
      <div className="arrow-right">
        <span className="fas fa-arrow-right" onClick={goRight}></span>
      </div>
    </div>
  )
}

export default ProjectsPage;