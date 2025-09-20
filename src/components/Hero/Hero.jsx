import React from "react";
import styles from "./Hero.module.css";
import Model from "./Model/Model";
import cv from "../../../CV.pdf"
import { getImageUrl } from "../../utils";
import Typed from 'typed.js';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

export const Hero = () => {
  const typedRef = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        "Frontend",
        "Backend",
        "Game",
        "App"
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="profile" className={styles.container}>
      <div className={styles.picContainer}>
        <Model />
      </div>
      <div className={styles.textSection}>
        <p className={styles.introText}>Hello, I'm</p>
        <h1 className={styles.title}>Dexter Lo</h1>
        <p className={styles.subtitle}>
          I'm a <span ref={typedRef}/>Developer
        </p>
        <div className={styles.btnContainer}>
          <a
            className={`${styles.btn} ${styles.btnOutline}`}
            href={cv}
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
          <a
            className={`${styles.btn} ${styles.btnSolid}`}
            href="#contact"
          >
            Contact Info
          </a>
        </div>
        <div className={styles.socialsContainer}>
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon} onClick={() => window.open("https://linkedin.com/in/cheuk-yin-lo-dexter", "_blank")} />
          <FontAwesomeIcon icon={faGithub} className={styles.icon} onClick={() => window.open("https://github.com/cheukyinloDexter", "_blank")} />
        </div>
      </div>
    </section>
  );
};
