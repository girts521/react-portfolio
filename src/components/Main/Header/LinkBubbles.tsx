import React from "react";
import styles from "./linkBubbles.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBrands, falinkedinIn } from '@fortawesome/free-solid-svg-icons'
import {faLinkedin, faFacebookF, faGithub} from '@fortawesome/free-brands-svg-icons'

const LinkBubbles:React.FC = () => {

    return <div className={styles.container}>
        <div className={styles.bubble}>
          <a target="_blank" href="https://www.linkedin.com/in/girts-karcevskis-79302890"><FontAwesomeIcon icon={faLinkedin}/></a>
        </div>

        <div className={styles.bubble}>
          <a target="_blank" href="https://www.facebook.com/girts.karcevskis/"><FontAwesomeIcon icon={faFacebookF}/></a>
        </div>

        <div className={styles.bubble}>
          <a target="_blank" href="https://github.com/girts521"><FontAwesomeIcon icon={faGithub}/>  </a>
        </div>

    </div>
}

export default LinkBubbles