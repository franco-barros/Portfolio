"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/Hero.module.css";
import AnimatedSphere from "../animations/animatedsphere";
import DownloadCV from "../utils/pdf/DownloadCV";

interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero: React.FC<HeroProps> = ({ scrollToSection }) => {
  return (
    <section className={styles.hero}>
      <div className={styles.backgroundEffect}></div>

      <div className={styles.heroContainer}>
        {/* Columna izquierda: Sphere animada */}
        <div className={styles.leftColumn}>
          <AnimatedSphere />
        </div>

        {/* Columna central: Título, descripción, botón */}
        <div className={styles.centerColumn}>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: -30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.68, -0.55, 0.265, 1.55],
            }}
          >
            Fullstack Developer
          </motion.h1>

          <motion.p
            className={styles.description}
            initial={{ opacity: 0, y: 30, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.5,
              ease: [0.68, -0.55, 0.265, 1.55],
            }}
          >
            Franco Barros
          </motion.p>

          {/* ✅ Botón que navega con scrollToSection */}
          <motion.button
            onClick={() => scrollToSection("projects")}
            className={styles.ctaButton}
            whileTap={{ scale: 0.95, opacity: 0.8 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            View Projects
          </motion.button>
        </div>

        {/* Columna derecha: CV */}
        <div className={styles.rightColumn}>
          <DownloadCV />
        </div>
      </div>
    </section>
  );
};

export default Hero;
