"use client";
import React from "react";
import styles from "../../styles/Project.module.css";

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  linkText: string;
  technologies: string[];
}

const Project: React.FC<ProjectProps> = ({
  title,
  description,
  link,
  linkText,
  technologies,
}) => {
  return (
    <div className={styles.projectCard}>
      <h3 className={styles.projectTitle}>{title}</h3>
      <p className={styles.description}>{description}</p>
      <div className={styles.projectLinkContainer}>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.projectLink}
        >
          {linkText}
        </a>
      </div>
      <div className={styles.techContainer}>
        <span className={styles.techTitle}>Tecnologías:</span>
        <ul className={styles.techList}>
          {technologies.map((tech) => (
            <li key={tech} className={styles.techItem}>
              {tech}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Project;
