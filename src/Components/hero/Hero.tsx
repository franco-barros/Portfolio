"use client";
import React from "react";
import styles from "../../styles/Hero.module.css";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffect}></div>

      <div className={styles.heroContent}>
        <h1 className={styles.title}>Bienvenido a Mi Portafolio</h1>
        <p className={styles.description}>Desarrollador Fullstack</p>
        <button className={styles.ctaButton}>Ver proyectos</button>
      </div>
    </section>
  );
};

export default Hero;
