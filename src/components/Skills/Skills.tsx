import React from "react";
import styles from "./skills.module.css";
import Plx from "react-plx";

const Skills = () => {

    const parallaxData = [
        {
          start: 'self',
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
          ]
          }
        
      ];

  return (
    <div id="skills" className={styles.container}>
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
