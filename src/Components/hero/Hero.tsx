"use client";
import React from "react";
import styles from "../../styles/Hero.module.css";
import AnimatedSphere from "../animations/animatedsphere";
import DownloadCV from "../utils/pdf/DownloadCV";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffect}></div>

      <div className={styles.heroContainer}>
        {/*Columna izquierda: Sphere with photo */}
        <div className={styles.leftColumn}>
          <AnimatedSphere />
        </div>

        {/* Columna centro: Content */}
        <div className={styles.centerColumn}>
          <h1 className={styles.title}>Fullstack Developer</h1>
          <p className={styles.description}>Franco Barros</p>
          {/* Turn the button into a link for scrolling */}
          <a href="#projects" className={styles.ctaButton}>
            View Projects
          </a>
        </div>

        {/* Columna derecha: Download CV */}
        <div className={styles.rightColumn}>
          <DownloadCV />
        </div>
      </div>
    </section>
  );
};

export default Hero;
