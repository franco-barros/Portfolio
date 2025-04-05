"use client";
import React from "react";
import { motion } from "framer-motion";
import styles from "../../styles/AboutMe.module.css";
import dynamic from "next/dynamic";
import FloatingShape from "../animations/animatedphrases";

const AnimatedAbout = dynamic(() => import("../animations/animatedsquare"), {
  ssr: false,
});

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <h2 className="globalTitle">About Me</h2>
        <FloatingShape />
        <div className={styles.textCard}>
          <p className={styles.paragraph}>
            I am a full-stack developer committed to innovation and continuous
            improvement. I believe everything we create should carry a part of
            ourselves, a little soul. Personality is essential in every project
            and in this life, and I always strive to pour my heart into every
            line of code. Giving my best always aspires to more, that mindset
            defines me. Passionate about technology, I embrace continuous
            learning to deliver solutions that are not only efficient and
            high-quality, but also thoughtful and people-centered, aiming to
            solve problems in a simple and meaningful way to create the best
            possible experience for people.
          </p>
        </div>
      </motion.div>
      <div className={styles.squareContainer}>
        <AnimatedAbout />
      </div>
    </section>
  );
};

export default AboutMe;
