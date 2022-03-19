import React from "react";
import Particles from "react-tsparticles";
import styles from './particles.module.css'

const HeaderParticles = () => {

  return (
      
    <Particles  className={styles.tsparticles}
      id="tsparticles"

      height={'100vh'}
      width={'100%'}
      options={{
        fullScreen: false,
        background: {
          color: {
            value: "#02010a",
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
            value: '#a9d6e5'
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
            value: 400,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "star",
          },
          size: {
            random: true,
            value: 1
          },
        },
        detectRetina: true,
      }}
    />
    
  );
};

export default HeaderParticles