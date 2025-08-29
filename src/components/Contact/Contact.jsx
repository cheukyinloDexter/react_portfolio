import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.icon} />
          <a href="mailto:him@dexterlo.dev">him@dexterlo.dev</a>
        </li>
        <li className={styles.link}>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
          <a href="https://www.linkedin.com/in/cheuk-yin-lo-dexter">linkedin.com/in/cheuk-yin-lo-dexter</a>
        </li>
        <li className={styles.link}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
          <a href="https://www.github.com/cheukyinloDexter">github.com/cheukyinloDexter</a>
        </li>
      </ul>
    </footer>
  );
};