import React from "react";
import styles from "./skills.module.css";
import Plx from "react-plx";

const Skills = () => {
  let fadeOut: number = 1000;
  let fadeIn: number = 1000;

  console.log(window.innerWidth);

  if(window.innerWidth === 375) {
    fadeIn = 700
    fadeOut = 1300;
  }
  if(window.innerWidth === 390 || window.innerWidth === 414) {
    fadeIn = 1000;
    fadeOut = 1900
  }
  if(window.innerWidth === 768) {
    fadeIn = 1200;
    fadeOut = 1900
  }
  if(window.innerWidth === 820) {
    fadeIn = 1500;
    fadeOut = 2300
  }
  if(window.innerWidth >= 1024) {
    fadeIn = 1800;
    fadeOut = 2500
  }


  console.log(fadeIn)

    const parallaxData = [
        {
          start: fadeIn,
          duration: 500,
          animateWhenNotInViewport: false,
          properties: [
            {
              startValue: 200,
              endValue: 0,
              property: "translateX",
              easing: "easeIn",
            },
            {
              startValue: -500,
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
          start: fadeOut,
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
          ]
          }
        
      ];

  return (
    <div className={styles.container}>
     <Plx className={styles.skills} parallaxData={parallaxData}>
        <div className={styles.js}><img src="/js.png" alt="" /></div>
        <div className={styles.react}><img src="/react.png" alt="" /></div>
        <div className={styles.ts}><img src="/typescript.png" alt="" /></div>
        <div className={styles.css}><img src="/css.png" alt="" /></div>
        <div className={styles.mongoDB}><img src="/mongoDB.png" alt="" /></div>
        <div className={styles.node}><img src="/node.png" alt="" /></div>
        </Plx>
    </div>
  );
};

export default Skills;
