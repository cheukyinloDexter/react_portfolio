import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section id="profile" className={styles.container}>
      <div className={styles.picContainer}>
        <img
          src={getImageUrl("heroImage.png")}
          alt="Dexter Lo profile picture"
          className={styles.heroImg}
        />
      </div>
      <div className={styles.textSection}>
        <p className={styles.introText}>Hello, I'm</p>
        <h1 className={styles.title}>Dexter Lo</h1>
        <p className={styles.subtitle}>Developer</p>
        <div className={styles.btnContainer}>
          <a
            className={`${styles.btn} ${styles.btnOutline}`}
            href="/cv.pdf"
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
          <img
            src={getImageUrl("linkedin.png")}
            alt="My LinkedIn profile"
            className={styles.icon}
            onClick={() => window.open("https://linkedin.com/", "_blank")}
          />
          <img
            src={getImageUrl("github.png")}
            alt="My Github profile"
            className={styles.icon}
            onClick={() => window.open("https://github.com/cheukyinloDexter", "_blank")}
          />
        </div>
      </div>
    </section>
  );
};
