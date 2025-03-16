"use client";
import React from "react";
import styles from "../../styles/Skills.module.css";

const skillsData = [
  { name: "Node.js", category: "backend" },
  { name: "Express.js", category: "backend" },
  { name: "NestJS", category: "backend" },
  { name: "Java", category: "backend" },
  { name: "JavaScript", category: "frontend" },
  { name: "TypeScript", category: "frontend" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "CSS", category: "frontend" },
  { name: "Tailwind CSS", category: "frontend" },
  { name: "HTML", category: "frontend" },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.backgroundEffect}></div>

      <h2 className={styles.heading}>Tools</h2>

      <div className={styles.skillsContainer}>
        {skillsData.map((skill, index) => (
          <span
            key={index}
            className={`${styles.skillTag} ${
              skill.category === "frontend" ? styles.frontend : styles.backend
            }`}
          >
            {"</>"} {skill.name}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
