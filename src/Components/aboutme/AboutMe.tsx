"use client";
import React from "react";
import styles from "../../styles/about/AboutMe.module.css";
import FloatingShape from "../animations/animatedphrases";
import AnimationCarousel from "./animationcarousel";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* Encabezado */}
      <div className={styles.headerContainer}>
        <h2 className={styles.aboutTitle}>About Me</h2>
        <FloatingShape />
      </div>

      {/* Descripción */}
      <div className={styles.textContainer}>
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
      </div>

      {/* Carousel con animación actual y controles internos */}
      <AnimationCarousel />
    </section>
  );
};

export default AboutMe;
