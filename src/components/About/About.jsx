import React from "react";
import styles from "./About.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMousePointer,
  faServer,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        {/* <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        /> */}
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <FontAwesomeIcon icon={faMousePointer} className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I build responsive, user-friendly web apps with React, modern
                CSS, and a focus on clean UI and accessibility.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <FontAwesomeIcon icon={faServer} className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I create secure and scalable back-end systems with PHP and
                MySQL, and connect them to APIs for full-stack solutions.
              </p>
            </div>
          </li>

          <li className={styles.aboutItem}>
            <FontAwesomeIcon icon={faPalette} className={styles.icon} />
            <div className={styles.aboutItemText}>
              <h3>Creative Developer</h3>
              <p>
                Beyond web, I’ve built mobile apps, AI features, and games with
                Unity—bringing creativity and versatility to my projects.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
