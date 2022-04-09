import React from "react";
import styles from "./main.module.css"

import { useTypewriter, Cursor} from 'react-simple-typewriter'

import HeaderParticles from "./Header/HeaderParticles";
import LinkBubbles from "./Header/LinkBubbles";

const TypewriterHook = () => {
    const { text } = useTypewriter({
      words: ['Frontend', 'Backend', 'React', 'Full stack', 'Web' ],
      loop: 0,
    })
  
    return (
      <div className={styles.header}>
        <span>{text}<Cursor /> developer</span>
        
      </div>
    )
  }

const Main: React.FC = () => {

    return <main id="home" className={styles.main}>
    <h1>I'm Girts Karcevskis</h1>
    <h2>and I'm a self-taught: </h2>
    <TypewriterHook />
    <LinkBubbles />
    <HeaderParticles />
    </main>
    
}

export default Main     