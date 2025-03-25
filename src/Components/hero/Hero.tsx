"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Hero.module.css";
import AnimatedSphere from "../animations/animatedsphere";
import DownloadCV from "../utils/pdf/DownloadCV";

const Hero: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffect}></div>

      <div className={styles.heroContainer}>
        {/* Columna izquierda: Sphere con animación */}
        <div className={styles.leftColumn}>
          <AnimatedSphere />
        </div>

        {/* Columna central: Contenido */}
        <div className={styles.centerColumn}>
          <h1 className={styles.title}>Fullstack Developer</h1>
          <p className={styles.description}>Franco Barros</p>
          {/* Botón que hace scroll a la sección de proyectos */}
          <motion.a
            href="#projects"
            className={styles.ctaButton}
            whileTap={{ scale: 0.95, opacity: 0.8 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View Projects
          </motion.a>
        </div>

        {/* Columna derecha: Botón para descargar CV */}
        <div className={styles.rightColumn}>
          <DownloadCV />
        </div>
      </div>
    </section>
  );
};

export default Hero;
