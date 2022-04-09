import React, {useRef} from "react";
import "./reset.css";
import styles from "./app.module.css";

import Nav from "./components/Nav/Nav";
import Main from "./components/Main/Main";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

// type for Project props
interface ProjectProps {
  title: string;
  tech: string[];
  github: string;
  website: string;
  images: string[];
  text: string;
}

const todo: ProjectProps = {
  title: "Todo List",
  tech: [ 'React', 'Node', 'Express', 'MongoDB', 'Mongoose', 'styled components', 'AWS' ],
  github: "https://github.com/girts521/react-todoApp",
  website: "https://todo.gkarcevskis.com/",
  images: ["/todo_main.png", "/todo_project.png", "/todo_login.png"],
  text: "Yes, this is another todo app. The internet must be full of different todo apps made by young learning developers. But in this project I tried to include a bit more than any of those tutorial based todo apps. The design is largely inspired by the Todoist app, which is my favorite todo app: https://todoist.com/ I tried to challenge myself and make this project as close to the todoist app as possible. It still certainly lacks some functionality, but if I could make my own todoist app then I would not be searching for a junior position...",
};

const foodSearch: ProjectProps = {
  title: "Food Search",
  tech: [ 'React','typescript','styled components','AWS'],
  github: "https://github.com/girts521/food-search",
  website: "https://food-search.gkarcevskis.com/",
  images: ["/food-search-main.png", "/food-search-products.png", "/food-search-description.png", "/food-search-description2.png", "/food-search-search.png"],
  text: "This is a react project with typescrpt. The main goal of the project was to fetch data from https://www.themealdb.com/, display it, and create a search functionality. The search is also implemented with a debounce function to increase the performance and not make unnecessary requests to the server.",
};

const foodBlog: ProjectProps = {
  title: "Food Blog",
  tech: [ 'React', 'Node', 'Express', 'MongoDB', 'Mongoose', 'AWS' ],
  github: "https://github.com/girts521/react-todoApp",
  website: "https://food-blog.gkarcevskis.com/",
  images: ["/food-blog-main.png", "/food-blog-posts.png", "/food-blog-register.png", "/food-blog-404.png"],
  text: "This was one of my first react projects. Thats why it is a rather small project which is using information from a publicly available api, which can be found here. It is showing different food categories with a short description and a photo. Besides that I am using formik for register and login form along with yup validation.",
};

const salaryCalculator: ProjectProps = {
  title: "Salary Calculator",
  tech: [ 'html', 'css', 'javascript', 'jquery' ],
  github: "https://github.com/girts521/salary_calculator",
  website: "https://girts521.github.io/salary_calculator/",
  images: ["/salary_calculator.png", "/salary_calculator2.png", "/salary_calculator3.png"],
  text: "This is an app which calculates the netto salary in Latvia. The calculations are based on the laws in Latvia. This project is using an older javascript library: jQuery. Even tho it is an older library it is still used by a lot of websites these days and it was interesting to use it on top of vanilla JavaScript.",
};

const portfolio: ProjectProps = {
  title: "Portfolio",
  tech: [ 'React', 'Node', 'Express', ' Module CSS', 'Mailgun', 'AWS'],
  github: "https://github.com/girts521/react-portfolio",
  website: "https://gkarcevskis.com/",
  images: ["/portfolio-main.png", "/portfolio-about.png","portfolio-contact.png"],
  text: "This is my portfolio website built with react and typescript. It also has a small api built with node and express, which is used to send emails from the contact form. I am using mailgun to send the emails to my email address. The animation of the home page is made with tsParticles.js, it was very interesting to play with it and there are so many different possibilities with it. The scroll animations are done with react-plx and react-scroll.",
};



const App: React.FC = () => {

  return (
    <div className={styles.container}>
      <Nav />
      <Main />
      <About />
      <Skills />
      <Projects project={todo} />
      <Projects project={foodSearch}/>
      <Projects project={portfolio}/>
      <Projects project={foodBlog}/>
      <Projects project={salaryCalculator}/>
      <Contact />
    </div>
  );
};

export default App;
