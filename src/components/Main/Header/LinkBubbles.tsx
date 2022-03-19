import React from "react";
import styles from "./linkBubbles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBrands, falinkedinIn } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faFacebookF, faGithub} from '@fortawesome/free-brands-svg-icons'

const LinkBubbles:React.FC = () => {

    return <div className={styles.container}>
        <div className={styles.bubble}>
            <FontAwesomeIcon icon={faLinkedin}/>
        </div>

        <div className={styles.bubble}>
            <FontAwesomeIcon icon={faFacebookF}/>
        </div>

        <div className={styles.bubble}>
            <FontAwesomeIcon icon={faGithub}/>
        </div>

    </div>
}

export default LinkBubbles