import React from "react";
import styles from "./skills.module.css";
import Plx from "react-plx";

const Skills = () => {

    const parallaxData = [
        {
          start: 900,
          duration: 300,
          animateWhenNotInViewport: false,
          properties: [
            {
              startValue: 100,
              endValue: 0,
              property: "translateX",
              easing: "easeIn",
            },
            {
              startValue: -300,
              endValue: 0,
              property: "translateY",
            },
            {
              startValue: 100,
              endValue: 0,
              property: "blur",
            },
          ],
        },
        
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
