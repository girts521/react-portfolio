import React from "react";
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
  tech: [ 'React', 'Node', 'Express', 'MongoDB', 'Mongoose', 'CSS', 'HTML' ],
  github: "https://github.com/girts521/react-todoApp",
  website: "https://todo.gkarcevskis.com/",
  images: ["/todo_main.png", "/todo_project.png", "/todo_login.png"],
  text: "Yes, this is another todo app. The internet must be full of different todo apps made by young learning developers. But in this project I tried to include a bit more than any of those tutorial based todo apps. The design is largely inspired by the Todoist app, which is my favorite todo app: https://todoist.com/ I tried to challenge myself and make this project as close to the todoist app as possible. It still certainly lacks some functionality, but if I could make my own todoist app then I would not be searching for a junior position...",
};

const foodSearch: ProjectProps = {
  title: "Food Search",
  tech: [ 'React', 'Node', 'Express', 'MongoDB', 'Mongoose', 'CSS', 'HTML' ],
  github: "https://github.com/girts521/react-todoApp",
  website: "https://todo.gkarcevskis.com/",
  images: ["/todo_main.png", "/todo_project.png", "/todo_login.png"],
  text: "Yes, this is another todo app. The internet must be full of different todo apps made by young learning developers. But in this project I tried to include a bit more than any of those tutorial based todo apps. The design is largely inspired by the Todoist app, which is my favorite todo app: https://todoist.com/ I tried to challenge myself and make this project as close to the todoist app as possible. It still certainly lacks some functionality, but if I could make my own todoist app then I would not be searching for a junior position...",
};

const foodBlog: ProjectProps = {
  title: "Food Blog",
  tech: [ 'React', 'Node', 'Express', 'MongoDB', 'Mongoose', 'CSS', 'HTML' ],
  github: "https://github.com/girts521/react-todoApp",
  website: "https://todo.gkarcevskis.com/",
  images: ["/todo_main.png", "/todo_project.png", "/todo_login.png"],
  text: "Yes, this is another todo app. The internet must be full of different todo apps made by young learning developers. But in this project I tried to include a bit more than any of those tutorial based todo apps. The design is largely inspired by the Todoist app, which is my favorite todo app: https://todoist.com/ I tried to challenge myself and make this project as close to the todoist app as possible. It still certainly lacks some functionality, but if I could make my own todoist app then I would not be searching for a junior position...",
};

const salaryCalculator: ProjectProps = {
  title: "Salary Calculator",
  tech: [ 'React', 'Node', 'Express', 'MongoDB', 'Mongoose', 'CSS', 'HTML' ],
  github: "https://github.com/girts521/react-todoApp",
  website: "https://todo.gkarcevskis.com/",
  images: ["/todo_main.png", "/todo_project.png", "/todo_login.png"],
  text: "Yes, this is another todo app. The internet must be full of different todo apps made by young learning developers. But in this project I tried to include a bit more than any of those tutorial based todo apps. The design is largely inspired by the Todoist app, which is my favorite todo app: https://todoist.com/ I tried to challenge myself and make this project as close to the todoist app as possible. It still certainly lacks some functionality, but if I could make my own todoist app then I would not be searching for a junior position...",
};

const portfolio: ProjectProps = {
  title: "Portfolio",
  tech: [ 'React', 'Node', 'Express', 'MongoDB', 'Mongoose', 'CSS', 'HTML' ],
  github: "https://github.com/girts521/react-todoApp",
  website: "https://todo.gkarcevskis.com/",
  images: ["/todo_main.png", "/todo_project.png", "/todo_login.png"],
  text: "Yes, this is another todo app. The internet must be full of different todo apps made by young learning developers. But in this project I tried to include a bit more than any of those tutorial based todo apps. The design is largely inspired by the Todoist app, which is my favorite todo app: https://todoist.com/ I tried to challenge myself and make this project as close to the todoist app as possible. It still certainly lacks some functionality, but if I could make my own todoist app then I would not be searching for a junior position...",
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
