"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/projects/ProjectCard.module.css";

interface ProjectProps {
  projectsId: string;
  title: string;
  image: string;
  technologies: string[];
}

const ProjectCard: React.FC<ProjectProps> = ({
  projectsId,
  title,
  image,
  technologies,
}) => {
  return (
    <div className={styles.projectCard}>
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className={styles.projectImage}
      />
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
          <Link href={`/projects/${projectsId}`} className={styles.projectLink}>
            View Project
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
