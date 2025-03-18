"use client";
import React, { useState, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "../../styles/SkillCarousel.module.css";

interface Skill {
  name: string;
  category: string;
  description: string;
  usage?: string;
}

interface SkillCarouselProps {
  skills: Skill[];
  autoRotateInterval?: number;
}

const SkillCarousel: React.FC<SkillCarouselProps> = ({
  skills,
  autoRotateInterval = 3000,
}) => {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startRotation = () => {
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % skills.length);
    }, autoRotateInterval);
  };

  const stopRotation = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  // Navegación manual
  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + skills.length) % skills.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % skills.length);
  };

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, [skills, autoRotateInterval]);

  return (
    <div
      className={styles.carouselContainer}
      onMouseEnter={stopRotation}
      onMouseLeave={startRotation}
    >
      <button
        className={`${styles.navButton} ${styles.left}`}
        onClick={handlePrev}
      >
        <FaArrowLeft />
      </button>
      <div className={styles.card}>
        <h3>{skills[current].name}</h3>
        <p>{skills[current].description}</p>
        {skills[current].usage && <p>{skills[current].usage}</p>}
      </div>
      <button
        className={`${styles.navButton} ${styles.right}`}
        onClick={handleNext}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default SkillCarousel;
