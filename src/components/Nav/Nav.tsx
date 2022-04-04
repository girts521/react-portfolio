import React from "react";
import { Link } from "react-scroll";

import styles from "./nav.module.css"

const Nav:React.FC = () => {
    return <nav className={styles.container}>
        <div className={styles.navBtns}>
            <ul>
                <li><Link to="home" spy={true} smooth={true} offset={50} duration={500}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} offset={50} duration={500}>About</Link></li>
                <li><Link to="skills" spy={true} smooth={true} offset={50} duration={500}>Skills</Link></li>
                <li><Link to="projects" spy={true} smooth={true} offset={50} duration={500}>Projects</Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact</Link></li>
                
            </ul>
        </div>
    </nav>
   
}

export default Nav