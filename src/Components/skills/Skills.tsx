"use client";
import React from "react";
import styles from "../../styles/Skills.module.css";
import SkillCarousel from "../skillcarousel";

const skillsData = [
  {
    name: "Node.js",
    category: "backend",
    description: "Uso Node.js para construir servicios escalables.",
  },
  {
    name: "Express.js",
    category: "backend",
    description:
      "Express proporciona un framework minimalista para el backend.",
  },
  {
    name: "NestJS",
    category: "backend",
    description:
      "NestJS me ayuda a estructurar aplicaciones de backend con decoradores.",
  },
  {
    name: "Java",
    category: "backend",
    description: "Java se usa para soluciones empresariales robustas.",
  },
  {
    name: "JavaScript",
    category: "frontend",
    description: "JavaScript es la base para páginas web dinámicas.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    description: "TypeScript agrega tipado estático a JavaScript.",
  },
  {
    name: "React",
    category: "frontend",
    description: "React se usa para construir interfaces interactivas.",
  },
  {
    name: "Next.js",
    category: "frontend",
    description:
      "Next.js permite renderizado del lado del servidor en aplicaciones React.",
  },
  {
    name: "CSS",
    category: "frontend",
    description: "CSS se utiliza para estilizar páginas web.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description:
      "Tailwind CSS ofrece utilidades para un estilo rápido y consistente.",
  },
  {
    name: "HTML",
    category: "frontend",
    description: "HTML estructura el contenido de las páginas web.",
  },
];

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.backgroundEffect}></div>
      <h2 className={styles.heading}>Tools</h2>
      <div className={styles.skillsLayout}>
        {/* Lista de tecnologías (lado izquierdo) */}
        <div className={styles.skillsList}>
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
        {/* Card carousel (lado derecho) */}
        <div className={styles.skillCarouselContainer}>
          <SkillCarousel skills={skillsData} autoRotateInterval={3000} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
