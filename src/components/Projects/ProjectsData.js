import imgRestaurant from "../../static/images/restaurant.png";
import imgPlanner from "../../static/images/planYourMeal.png";
import imgPortfolio from "../../static/images/portfolio.png";

const myProjects = [
   {
      img: imgRestaurant,
      heading: "The Lockdown",
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
      liveLink: "https://pepe199111.github.io/portfolio/#/",
   },
];

export default myProjects;