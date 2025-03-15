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
