import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import Plx from "react-plx";
import styles from "./Projects.module.css";

interface ProjectProps {
  title: string;
  tech: string[];
  github: string;
  website: string;
  images: string[];
  text: string;
}

//react component for Projects
const Projects: React.FC<{project:ProjectProps}> = (props) => {
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

  const parallaxData = [
    {
      start: 'self',
      duration: 500,
      animateWhenNotInViewport: false,
      properties: [
        {
          startValue: 70,
          endValue: 0,
          property: "translateX",
          easing: "easeIn",
        },
        {
          startValue: 200,
          endValue: 0,
          property: "translateY",
        },
        {
          startValue: 0,
          endValue: 1,
          property: "opacity",
        }
      ],
    },
    {
      start: 'self',
      startOffset: '15%',
      duration: 500,
      animateWhenNotInViewport: true,
      properties: [
        {
          startValue: 0,
          endValue: 70,
          property: "translateX",
          easing: "easeIn",
        },
        {
          startValue: 0,
          endValue: -300,
          property: "translateY",
        },
        {
          startValue: 1,
          endValue: 0,
          property: "opacity",
        }
      ],
    },
  ];


  return (
    <div id="projects" className={styles.container}>
      <Plx className={styles.project} parallaxData={parallaxData}>
        <div className={styles.img}>
          <div className={styles.arrows}>
           <div className={styles.left} onClick={prevImage} > <FontAwesomeIcon icon={faAngleLeft} /></div>
           <div className={styles.right} onClick={nextImage} > <FontAwesomeIcon icon={faAngleRight} /></div>
          </div>
          <img src={props.project.images[imageIndex]} alt="" />
        </div>
        <div className={styles.text}>
          <h2>{props.project.title}</h2>
          <p>
            {props.project.text}
          </p>
          <p>
           <span> Technologies used: {props.project.tech.map((item) => {
             if(item === props.project.tech[props.project.tech.length - 1]){
             return item + " "
             } else {
              return item + ", "
             }
           })} </span>
            <br /><br />
            <span><a target={'_blank'} href={props.project.github}>GitHub repo can be found here</a></span>
            <br /><br />
            <span><a target={'_blank'} href={props.project.website}>Live website can be found here</a></span>
          </p>
        </div>
        </Plx>
    </div>
  );
};

export default Projects;
