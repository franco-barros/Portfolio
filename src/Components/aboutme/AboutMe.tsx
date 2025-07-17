"use client";

import React from "react";
import styles from "../../styles/about/AboutMe.module.css";
import FloatingShape from "../animations/animatedphrases";
import AnimationCarousel from "./animationcarousel";
import { FadeInOnScroll } from "../shared/fadeInonscroll";
import { ArrowDownCircle } from "lucide-react";

const AboutMe: React.FC = () => {
  return (
    <section id="about" className={styles.aboutSection}>
      {/* Encabezado */}
      <FadeInOnScroll>
        <div className={styles.headerContainer}>
          <h2 className={styles.aboutTitle}>About Me</h2>
          <FloatingShape />
        </div>
      </FadeInOnScroll>

      {/* Descripción */}
      <FadeInOnScroll delay={0.2}>
        <div className={styles.textContainer}>
          <div className={styles.textCard}>
            <p className={styles.paragraph}>
              I am a full-stack developer committed to innovation and continuous
              improvement. I believe everything we create should carry a part of
              ourselves, a little soul. Personality is essential in every
              project and in this life, and I always strive to pour my heart
              into every line of code. Giving my best always aspires to more,
              that mindset defines me. Passionate about technology, I embrace
              continuous learning to deliver solutions that are not only
              efficient and high-quality, but also thoughtful and
              people-centered, aiming to solve problems in a simple and
              meaningful way to create the best possible experience for people.
            </p>
          </div>
        </div>
      </FadeInOnScroll>

      {/* Subtítulo + Carousel */}
      <FadeInOnScroll delay={0.4}>
        <div className={styles.carouselIntro}>
          <p className={styles.carouselSubtitle}>
            Tap to view the animation
            <ArrowDownCircle size={22} className={styles.arrowIcon} />
          </p>
          <AnimationCarousel />
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default AboutMe;
