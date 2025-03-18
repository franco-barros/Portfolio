"use client";
import React from "react";
import styles from "../../styles/Hero.module.css";
import AnimatedSphere from "../animations/animatedsphere";
import DownloadCV from "../pdf";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffect}></div>

      <div className={styles.heroContainer}>
        {/* Columna izquierda: Esfera con foto */}
        <div className={styles.leftColumn}>
          <AnimatedSphere />
        </div>

        {/* Columna central: Contenido */}
        <div className={styles.centerColumn}>
          <h1 className={styles.title}>Desarrollador Fullstack</h1>
          <p className={styles.description}>Franco Barros</p>
          {/* Convertimos el botón en un enlace para hacer scroll */}
          <a href="#projects" className={styles.ctaButton}>
            Ver proyectos
          </a>
        </div>

        {/* Columna derecha: Descargar CV */}
        <div className={styles.rightColumn}>
          <DownloadCV />
        </div>
      </div>
    </section>
  );
};

export default Hero;
