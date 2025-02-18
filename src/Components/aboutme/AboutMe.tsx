"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/AboutMe.module.css";

const AboutMe = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        Sobre mí
      </motion.h2>
      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Soy desarrollador full-stack comprometido con la innovación y la mejora
        continua. Apasionado por la tecnología, me dedico al aprendizaje
        constante para integrar soluciones eficientes y de alta calidad en cada
        proyecto. He completado cursos especializados en React, Java, Node.js,
        Express y Nest, y actualmente estoy profundizando mis conocimientos en
        Next.js. Esta formación me permite aplicar las mejores prácticas y
        abordar desafíos técnicos con creatividad y rigor, mientras trabajo de
        manera colaborativa en entornos multidisciplinarios.
      </motion.p>
    </section>
  );
};

export default AboutMe;
