"use client";
import React from "react";
import styles from "../../styles/Projects.module.css";

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      {/* Capa de fondo; sin lógica de mouse, se controla de forma global */}
      <div className={styles.backgroundEffect}></div>

      <h2 className={styles.title}>My Projects</h2>
      <div className={styles.projectsGrid}>
        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Market Multiverse</h3>
          <p className={styles.description}>
            Una plataforma de ecommerce moderna con múltiples categorías y un
            diseño responsivo.
          </p>
          <div className={styles.projectLinkContainer}>
            <a
              href="https://franco-barros.github.io/Market-multiverse/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Ver Proyecto
            </a>
          </div>
          <div className={styles.techContainer}>
            <span className={styles.techTitle}>Tecnologías:</span>
            <ul className={styles.techList}>
              <li className={styles.techItem}>React</li>
              <li className={styles.techItem}>CSS</li>
              <li className={styles.techItem}>JavaScript</li>
            </ul>
          </div>
        </div>

        <div className={styles.projectCard}>
          <h3 className={styles.projectTitle}>Listify</h3>
          <p className={styles.description}>
            Aplicación web de lista de tareas con sincronización en tiempo real
            entre pestañas del navegador.
          </p>
          <div className={styles.projectLinkContainer}>
            <a
              href="https://github.com/franco-barros/Listify"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.projectLink}
            >
              Ver Proyecto
            </a>
          </div>
          <div className={styles.techContainer}>
            <span className={styles.techTitle}>Tecnologías:</span>
            <ul className={styles.techList}>
              <li className={styles.techItem}>React</li>
              <li className={styles.techItem}>CSS</li>
              <li className={styles.techItem}>JavaScript</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
