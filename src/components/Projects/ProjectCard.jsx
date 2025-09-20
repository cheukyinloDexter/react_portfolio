import React from "react";

import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <div className={styles.projectCardContainer}>
      <div className={styles.picContainer}>
        <img
          src={imageSrc}
          alt={`Image of ${title}`}
          className={styles.image}
        />
      </div>
      <div className={styles.overlay}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.skills}>
          {skills.map((skill, id) => {
            return (
              <li key={id} className={styles.skill}>
                {skill}
              </li>
            );
          })}
        </ul>
        <div className={styles.links}>
          {demo && (
            <a href={demo} className={styles.link} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
          )}
          {source && (
            <a href={source} className={styles.link} target="_blank" rel="noopener noreferrer">
              Source
            </a>
          )}
        </div>
      </div>
      
    </div>
  );
};