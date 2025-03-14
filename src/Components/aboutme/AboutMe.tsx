"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/AboutMe.module.css";
import dynamic from "next/dynamic";

const AnimatedSquares = dynamic(() => import("../animatedsquare"), {
  ssr: false,
});

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* Si deseas que el MouseEffect sea específico para AboutMe, lo puedes incluir aquí */}
      {/* <MouseEffect className={styles.backgroundEffect} /> */}

      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className={styles.heading}>About Me</h2>
        <p className={styles.paragraph}>
          I am a full-stack developer committed to innovation and continuous
          improvement. Passionate about technology, I am dedicated to constant
          learning to integrate efficient and high-quality solutions into every
          project.
        </p>
      </motion.div>
      <div className={styles.squareContainer}>
        <AnimatedSquares />
      </div>
    </section>
  );
};

export default AboutMe;
