import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "./Projects.module.css";

//react component for Projects
const Projects: React.FC = () => {
  //state for imageIndex
  const [imageIndex, setImageIndex] = useState(0);

  //array of images for projects
  const images = ["/todo_main.png", "/todo_project.png", "/todo_login.png"];

  //change the image to the next one in the array
  const nextImage = () => {
    if (imageIndex === images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex(imageIndex + 1);
    }
  };

  //change the image to the previous one in the array
    const prevImage = () => {
    if (imageIndex === 0) {
      setImageIndex(images.length - 1);
    } else {
      setImageIndex(imageIndex - 1);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.project}>
        <div className={styles.img}>
          <div className={styles.arrows}>
           <div className={styles.left} onClick={prevImage} > <FontAwesomeIcon icon={faAngleLeft} /></div>
           <div className={styles.right} onClick={nextImage} > <FontAwesomeIcon icon={faAngleRight} /></div>
          </div>
          <img src={images[imageIndex]} alt="" />
        </div>
        <div className={styles.text}>
          <h2>Todo List</h2>
          <p>
            Yes, this is another todo app. The internet must be full of
            different todo apps made by young learning developers. But in this
            project I tried to include a bit more than any of those tutorial
            based todo apps. <br /> <br />
            The design is largely inspired by the Todoist app,
            which is my favorite todo app: https://todoist.com/ I tried to
            challenge myself and make this project as close to the todoist app
            as possible. <br /> <br />
            It still certainly lacks some functionality, but if I
            could make my own todoist app then I would not be searching for a
            junior position...
          </p>
          <p>
           <span> Technologies used: React, Node, Express, MongoDB, Mongoose, CSS,
            HTML </span>
            <br /><br />
            <span><a target={'_blank'} href="https://github.com/girts521/react-todoApp">GitHub repo can be found here</a></span>
            <br /><br />
            <span><a target={'_blank'} href="https://todo.gkarcevskis.com/">Live website can be found here</a></span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
