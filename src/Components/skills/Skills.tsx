"use client";
import React from "react";
import styles from "../../styles/skills/Skills.module.css";
import SkillCarousel from "./SkillCarousel";
import { skillsData } from "../../data/SkillData";

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.backgroundEffect}></div>
      <h2 className={styles.skillsTitle}>Tools & Skills</h2>
      <div className={styles.skillsLayout}>
        {/* Lista de tecnologías */}
        <div className={styles.skillsList}>
          {skillsData.map((skill) => (
            <span
              key={skill.name}
              className={`${styles.skillTag} ${
                skill.category === "frontend" ? styles.frontend : styles.backend
              }`}
            >
              {skill.icon && (
                <i className={skill.icon} style={{ marginRight: "8px" }}></i>
              )}
              {skill.name}
            </span>
          ))}
        </div>

        {/* Carrusel de habilidades */}
        <div className={styles.skillCarouselContainer}>
          <SkillCarousel skills={skillsData} autoRotateInterval={3000} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
