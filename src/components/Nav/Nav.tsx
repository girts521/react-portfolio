import React from "react";

import styles from "./nav.module.css"

const Nav:React.FC = ()=> {
    return <nav className={styles.container}>
        <div className={styles.navBtns}>
            <ul>
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Portfolio</a></li>
                <li><a href="">Skills</a></li>
                <li><a href="">Contact</a></li>
            </ul>
        </div>
    </nav>
   
}

export default Nav