"use client";
import React from "react";
import styles from "../../styles/Projects.module.css";
import Project from "./Project";

const projectData = [
  {
    title: "Market Multiverse",
    description:
      "Una plataforma de ecommerce moderna con múltiples categorías y un diseño responsivo.",
    link: "https://francoisdev-market-multiverse.com",
    linkText: "Ver Proyecto",
    technologies: ["React", "CSS Modules", "Next.js"],
  },
  {
    title: "Listify",
    description:
      "Aplicación web de lista de tareas con sincronización en tiempo real entre pestañas del navegador.",
    link: "https://github.com/francoisrosales/Listify",
    linkText: "Ver en GitHub",
    technologies: ["React", "CSS Modules", "JavaScript"],
  },
  {
    title: "DevConnect",
    description:
      "Una red social para desarrolladores donde pueden compartir proyectos y colaborar.",
    link: "https://github.com/francoisrosales/DevConnect",
    linkText: "Ver en GitHub",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "CryptoStats",
    description:
      "Dashboard en tiempo real para seguimiento de criptomonedas con gráficos interactivos.",
    link: "https://cryptostats-live.com",
    linkText: "Ver Proyecto",
    technologies: ["React", "Recharts", "Node.js"],
  },
  {
    title: "TaskFlow",
    description:
      "Gestor de proyectos con tablero Kanban y colaboración en equipo.",
    link: "https://github.com/francoisrosales/TaskFlow",
    linkText: "Ver en GitHub",
    technologies: ["React", "Redux", "Firebase"],
  },
  {
    title: "WeatherNow",
    description:
      "Aplicación web para consultar el clima en tiempo real con integración de APIs externas.",
    link: "https://weathernow-app.com",
    linkText: "Ver Proyecto",
    technologies: ["Vue.js", "CSS Modules", "OpenWeather API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.projectsGrid}>
          {projectData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
