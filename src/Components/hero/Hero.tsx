"use client";
import React from "react";
import styles from "../../styles/Hero.module.css";
import AnimatedSphere from "../animatedsphere";
import DownloadCV from "../pdf";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffect}></div>

      {/* La esfera en la esquina inferior izquierda */}
      <div className={styles.animatedSphere}>
        <AnimatedSphere />
      </div>

      {/* Contenedor para el contenido y el botón del CV */}
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <h1 className={styles.title}>Desarrollador Fullstack</h1>
          <p className={styles.description}>Franco Barros</p>
          <button className={styles.ctaButton}>Ver proyectos</button>
        </div>

        {/* Botón del CV alineado a la derecha */}
        <div className={styles.cvButton}>
          <DownloadCV />
        </div>
      </div>
    </section>
  );
};

export default Hero;
