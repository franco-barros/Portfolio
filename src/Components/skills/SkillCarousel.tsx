"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import styles from "../../styles/skills/SkillCarousel.module.css";

interface Skill {
  name: string;
  category: string;
  description: string;
  usage?: string;
  icon?: string;
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
  const [maxHeight, setMaxHeight] = useState<number | undefined>(undefined);

  const stopRotation = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const startRotation = useCallback(() => {
    stopRotation();
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % skills.length);
    }, autoRotateInterval);
  }, [skills.length, autoRotateInterval, stopRotation]);

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + skills.length) % skills.length);
  const handleNext = () => setCurrent((prev) => (prev + 1) % skills.length);

  useEffect(() => {
    startRotation();
    return () => stopRotation();
  }, [startRotation, stopRotation]);

  // Cálculo dinámico de altura máxima para las tarjetas
  useEffect(() => {
    const container = document.createElement("div");
    container.style.visibility = "hidden";
    container.style.position = "absolute";
    container.style.top = "-9999px";
    container.style.left = "-9999px";
    container.style.width = "320px";
    container.style.padding = "1.2rem";
    container.style.boxSizing = "border-box";
    container.style.fontSize = "0.9rem";
    container.style.lineHeight = "1.4";
    container.style.fontWeight = "bold";

    document.body.appendChild(container);

    let max = 0;
    skills.forEach((skill) => {
      container.innerHTML = `
        <h3>${skill.name}</h3>
        <p>${skill.description}</p>
        ${skill.usage ? `<p>${skill.usage}</p>` : ""}
      `;
      max = Math.max(max, container.offsetHeight);
    });

    const paddingExtra = 110;
    setMaxHeight(max + paddingExtra);
    document.body.removeChild(container);
  }, [skills]);

  return (
    <section
      className={styles.carouselContainer}
      aria-label="Carrusel de habilidades"
      onMouseEnter={stopRotation}
      onMouseLeave={startRotation}
    >
      <button
        className={`${styles.navButton} ${styles.left}`}
        onClick={handlePrev}
        aria-label="Habilidad anterior"
      >
        <FaArrowLeft />
      </button>

      <div
        className={styles.card}
        style={{ height: maxHeight ? `${maxHeight}px` : "auto" }}
      >
        <div className={styles.iconContainer}>
          {skills[current].icon && <i className={skills[current].icon}></i>}
        </div>
        <h3>{skills[current].name}</h3>
        <p>{skills[current].description}</p>
        {skills[current].usage && <p>{skills[current].usage}</p>}
      </div>

      <button
        className={`${styles.navButton} ${styles.right}`}
        onClick={handleNext}
        aria-label="Habilidad siguiente"
      >
        <FaArrowRight />
      </button>
    </section>
  );
};

export default SkillCarousel;
