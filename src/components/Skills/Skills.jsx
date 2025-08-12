import React from "react";
import styles from "./Skills.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faMobileAlt,
  faGamepad,
  faDatabase,
  faShieldAlt,
  faPencilRuler,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const skillIcons = {
  "Programming & Software Development": faCode,
  "Web & Mobile Application Development": faMobileAlt,
  "Game Development & Interactive Media": faGamepad,
  "Data Management & AI Integration": faDatabase,
  "Cybersecurity": faShieldAlt,
  "Design & 3D Modeling": faPencilRuler,
  "Collaboration & Version Control": faUsers,
};

const skillList = {
  "Programming & Software Development": [
    "Python",
    "Java",
    "C++",
    "C#",
  ],
  "Web & Mobile Application Development": [
    "React",
    "Android",
    "iOS",
  ],
  "Game Development & Interactive Media": [
    "Unity3D",
    "Unreal Engine 5"
  ],
  "Data Management & AI Integration": [
    "MySQL",
    "Core ML",
  ],
  "Cybersecurity": [
    "Wireshark",
    "Nmap",
    "ffuf",
    "Network Security"
  ],
  "Design & 3D Modeling": [
    "Figma", "Blender", "Maya"
],
  "Collaboration & Version Control": ["Git"],
};

export const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h2 className={styles.title}>Skills</h2>
      <p className={styles["skills-sub-title"]}>
        Technologies I'm familiar with
      </p>
      <div className={styles["skills-details-container"]}>
        <div className={styles["article-container"]}>
          {Object.entries(skillList).map(([category, skills]) => (
            <article key={category}>
              <FontAwesomeIcon
                icon={skillIcons[category]}
                className={styles.icon}
              />
              <div>
                <h3 className={styles["project-title"]}>{category}</h3>
                <ul>
                  {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
