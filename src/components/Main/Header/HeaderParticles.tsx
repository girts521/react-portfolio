import React from "react";
import Particles from "react-tsparticles";
import styles from './particles.module.css'

const HeaderParticles = () => {
//   const particlesInit = (main:any) => {
//     console.log(main);

//   };

//   const particlesLoaded = (container:any) => {
//     console.log(container);
//   };
  return (
      
    <Particles  className={styles.tsparticles}
      id="tsparticles"
    //   init={particlesInit}
    //   loaded={particlesLoaded}
      height={'100vh'}
      width={'100%'}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "#4cc9f0",
          },
        },
        fpsLimit: 60,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 2,
              opacity: 0.8,
              size: 40,
            },
            push: {
              quantity: 20,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#023e8a","#0077b6", "#0077b6", "#0096c7", "#00b4d8", "#90e0ef", "#ade8f4", "#caf0f8"]
          },
          links: {
            enable: false
          },
          collisions: {
            enable: false,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "out",
            random: true,
            speed: 1,
            straight: true,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 30,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 100
          },
        },
        detectRetina: true,
      }}
    />
    
  );
};

export default HeaderParticles