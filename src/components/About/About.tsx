import React from "react";
import styles from "./about.module.css";
import Plx from "react-plx";

const About: React.FC = () => {
  const parallaxData = [
    {
      start: "self",
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
        },
      ],
    },
    {
      start: "self",
      startOffset: "30%",
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
        },
      ],
    },
  ];

  return (
    <>
      <div id="about" className={styles.about}>
        <Plx className={styles.photo} parallaxData={parallaxData}>
          <div>
            <img src="/forCV-cut-removebg-preview.png" alt="" />
          </div>
        </Plx>
        <Plx className={styles.text} parallaxData={parallaxData}>
          <div>
            <p>
              I am a self-taught web developer who is excited about learning
              various frontend and backend technologies. After almost two years
              of spending all my free time studying, I am confident that I am
              ready for the next challenge.
            </p>
          </div>
        </Plx>
      </div>
    </>
  );
};

export default About;
