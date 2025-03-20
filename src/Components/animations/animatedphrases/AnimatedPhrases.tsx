"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/animations/AnimatedPhrases.module.css";

const phrases = [
  "Resuelto de problemas",
  "Buscador de soluciones eficientes",
  "Desarrollador apasionado",
  "Innovador en tecnología",
];

const AnimatedPhrases = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Inicia el fade out
      setFade(false);
      // Después de 500ms (tiempo de fade out) cambia la frase y hace fade in
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500);
    }, 2000); // Cambia la frase cada 3 segundos

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.phraseContainer}>
      <p
        className={`${styles.phrase} ${fade ? styles.fadeIn : styles.fadeOut}`}
      >
        {phrases[current]}
      </p>
    </div>
  );
};

export default AnimatedPhrases;
