"use client";
import React from "react";
import styles from "../../styles/Hero.module.css";
import AnimatedSphere from "../animatedsphere";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffect}></div>

      {/* La esfera se posiciona absolutamente en la esquina inferior izquierda */}
      <div className={styles.animatedSphere}>
        <AnimatedSphere />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.title}>Bienvenido a Mi Portafolio</h1>
        <p className={styles.description}>Desarrollador Fullstack</p>
        <button className={styles.ctaButton}>Ver proyectos</button>
      </div>
    </section>
  );
};

export default Hero;
