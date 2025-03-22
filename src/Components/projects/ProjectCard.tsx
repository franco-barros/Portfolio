"use client";
import React from "react";
import styles from "../../styles/projects/ProjectCard.module.css";

interface ProjectProps {
  title: string;
  image: string;
  link: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  image,
  link,
  technologies,
}) => {
  return (
    <div className={styles.projectCard}>
      <img src={image} alt={title} className={styles.projectImage} />
      <div className={styles.overlay}>
        <div className={styles.infoAlways}>
          <h3 className={styles.projectTitle}>{title}</h3>
          <ul className={styles.techList}>
            {technologies.map((tech) => (
              <li key={tech} className={styles.techItem}>
                {tech}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.viewButton}>
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.projectLink}
          >
            View Project
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
