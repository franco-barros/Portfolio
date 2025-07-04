"use client";
import React, { useState } from "react";
import styles from "../../styles/AboutMe.module.css";
import dynamic from "next/dynamic";
import FloatingShape from "../animations/animatedphrases";
import AnimationCarousel from "./animationcarousel";
import { ChevronLeft, ChevronRight } from "lucide-react"; // Import lucide icons

const AnimatedAbout = dynamic(
  () => import("../animations/about/animatedyingyang"),
  { ssr: false }
);

const CloudsAnimation = dynamic(
  () => import("../animations/about/animatedcloud"),
  { ssr: false }
);

const CaptainShieldAnimation = dynamic(
  () => import("../animations/about/animatedcaptainshield"),
  { ssr: false }
);

const TriangleTesseractAnimation = dynamic(
  () => import("../animations/about/animatedtriangletesseract"),
  { ssr: false }
);

const TesseractAnimation = dynamic(
  () => import("../animations/about/animatedtesseract"),
  { ssr: false }
);

const IronManReactorAnimation = dynamic(
  () => import("../animations/about/animatedironmanreactor"),
  { ssr: false }
);

const AboutMe: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const animations = [
    <AnimatedAbout key="about" />,
    <CloudsAnimation key="clouds" />,
    <CaptainShieldAnimation key="shield" />,
    <TriangleTesseractAnimation key="triangletesseract" />,
    <TesseractAnimation key="tesseract" />,
    <IronManReactorAnimation key="reactor" />,
  ];

  const total = animations.length;

  const goNext = () => setCurrentIndex((i) => (i + 1) % total);
  const goPrev = () => setCurrentIndex((i) => (i - 1 + total) % total);

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

      {/* Carousel con animación actual */}
      <AnimationCarousel animations={animations} currentIndex={currentIndex} />

      {/* Controles de navegación con esferas y flechas con iconos */}
      <div
        className={styles.animationControls}
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          justifyContent: "center",
        }}
      >
        {/* Botón anterior con icono */}
        <button
          onClick={goPrev}
          aria-label="Previous animation"
          type="button"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronLeft size={24} color="#00e5ff" />
        </button>

        {/* Esferas que indican el slide activo */}
        <div
          style={{
            display: "flex",
            gap: 8,
          }}
        >
          {Array.from({ length: total }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              aria-label={`Go to animation ${i + 1}`}
              type="button"
              style={{
                width: 14,
                height: 14,
                borderRadius: "50%",
                border: "none",
                backgroundColor: i === currentIndex ? "#00e5ff" : "#555",
                cursor: "pointer",
                padding: 0,
              }}
            />
          ))}
        </div>

        {/* Botón siguiente con icono */}
        <button
          onClick={goNext}
          aria-label="Next animation"
          type="button"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 4,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ChevronRight size={24} color="#00e5ff" />
        </button>
      </div>
    </section>
  );
};

export default AboutMe;
