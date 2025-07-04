"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import styles from "../../../styles/about/AnimationCarousel.module.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const AnimatedAbout = dynamic(
  () => import("../../animations/about/animatedyingyang"),
  { ssr: false }
);
const CloudsAnimation = dynamic(
  () => import("../../animations/about/animatedcloud"),
  { ssr: false }
);
const CaptainShieldAnimation = dynamic(
  () => import("../../animations/about/animatedcaptainshield"),
  { ssr: false }
);
const TriangleTesseractAnimation = dynamic(
  () => import("../../animations/about/animatedtriangletesseract"),
  { ssr: false }
);
const TesseractAnimation = dynamic(
  () => import("../../animations/about/animatedtesseract"),
  { ssr: false }
);
const IronManReactorAnimation = dynamic(
  () => import("../../animations/about/animatedironmanreactor"),
  { ssr: false }
);

const AnimationCarousel: React.FC = () => {
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
    <div className={styles.carouselContainer}>
      <div className={styles.animationWrapper}>
        <button
          onClick={goPrev}
          aria-label="Previous animation"
          type="button"
          className={styles.arrowButton}
        >
          <ChevronLeft size={28} color="#00e5ff" />
        </button>

        <div className={styles.animationBox}>{animations[currentIndex]}</div>

        <button
          onClick={goNext}
          aria-label="Next animation"
          type="button"
          className={styles.arrowButton}
        >
          <ChevronRight size={28} color="#00e5ff" />
        </button>
      </div>

      <div className={styles.indicators}>
        {Array.from({ length: total }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            aria-label={`Go to animation ${i + 1}`}
            type="button"
            className={`${styles.indicatorButton} ${
              i === currentIndex ? styles.active : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default AnimationCarousel;
