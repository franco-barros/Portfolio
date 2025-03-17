"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../../styles/SkillCarousel.module.css";

interface Skill {
  name: string;
  category: string;
  description: string;
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
      <div className={styles.card}>
        <h3>{skills[current].name}</h3>
        <p>{skills[current].description}</p>
      </div>
    </div>
  );
};

export default SkillCarousel;
