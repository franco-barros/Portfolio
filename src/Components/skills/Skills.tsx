"use client";
import React from "react";
import styles from "../../styles/skills/Skills.module.css";
import SkillCarousel from "../skillcarousel";

const skillsData = [
  {
    name: "Node.js",
    category: "backend",
    description: "Uso Node.js para construir servicios escalables.",
    usage: "Lo utilizo para crear APIs REST y microservicios robustos.",
  },
  {
    name: "Express.js",
    category: "backend",
    description:
      "Express proporciona un framework minimalista para el backend.",
    usage: "Lo uso para estructurar y simplificar la lógica de mis servidores.",
  },
  {
    name: "NestJS",
    category: "backend",
    description:
      "NestJS me ayuda a estructurar aplicaciones de backend con decoradores.",
    usage: "Prefiero NestJS para organizar proyectos complejos.",
  },
  {
    name: "Java",
    category: "backend",
    description: "Java se usa para soluciones empresariales robustas.",
    usage: "Utilizo Java en proyectos donde se requiere gran escalabilidad.",
  },
  {
    name: "JavaScript",
    category: "frontend",
    description: "JavaScript es la base para páginas web dinámicas.",
    usage: "Lo uso para crear interacciones en el cliente.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    description: "TypeScript agrega tipado estático a JavaScript.",
    usage: "Prefiero TypeScript para evitar errores en tiempo de compilación.",
  },
  {
    name: "React",
    category: "frontend",
    description: "React se usa para construir interfaces interactivas.",
    usage: "Utilizo React para desarrollar aplicaciones web reactivas.",
  },
  {
    name: "Next.js",
    category: "frontend",
    description:
      "Next.js permite renderizado del lado del servidor en aplicaciones React.",
    usage: "Lo uso para optimizar el SEO y el rendimiento en proyectos React.",
  },
  {
    name: "CSS",
    category: "frontend",
    description: "CSS se utiliza para estilizar páginas web.",
    usage: "Utilizo CSS para dar el toque visual a mis aplicaciones.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description:
      "Tailwind CSS ofrece utilidades para un estilo rápido y consistente.",
    usage: "Prefiero Tailwind para agilizar el desarrollo de estilos.",
  },
  {
    name: "HTML",
    category: "frontend",
    description: "HTML estructura el contenido de las páginas web.",
    usage: "Es la base de todas mis páginas web.",
  },
];

// Mapeo de tecnologías a clases de Devicon
const deviconMap: Record<string, string> = {
  "Node.js": "devicon-nodejs-plain colored",
  "Express.js": "devicon-express-original colored",
  NestJS: "devicon-nestjs-plain colored",
  Java: "devicon-java-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  React: "devicon-react-original colored",
  "Next.js": "devicon-nextjs-original colored",
  CSS: "devicon-css3-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-plain colored",
  HTML: "devicon-html5-plain colored",
};

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.backgroundEffect}></div>
      <h2 className={styles.heading}>Tools</h2>
      <div className={styles.skillsLayout}>
        {/* Lista de tecnologías */}
        <div className={styles.skillsList}>
          {skillsData.map((skill, index) => (
            <span
              key={index}
              className={`${styles.skillTag} ${
                skill.category === "frontend" ? styles.frontend : styles.backend
              }`}
            >
              {deviconMap[skill.name] && (
                <i
                  className={deviconMap[skill.name]}
                  style={{ marginRight: "8px" }}
                ></i>
              )}
              {skill.name}
            </span>
          ))}
        </div>
        {/* Carrusel de tarjetas */}
        <div className={styles.skillCarouselContainer}>
          <SkillCarousel skills={skillsData} autoRotateInterval={3000} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
