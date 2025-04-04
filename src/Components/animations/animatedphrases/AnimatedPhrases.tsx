"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/animations/AnimatedPhrases.module.css";

const phrases = [
  "Problem solver",
  "Passionate developer",
  "Efficient solutions finder",
  "Technology innovator",
];

const AnimatedPhrases = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);
  // Duración total de la animación para letra por letra (en segundos)
  const totalAnimationDuration = 0.5;

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % phrases.length);
        setAnimate(true);
      }, 500);
    }, 3000); // Cambia la frase cada 3 segundos
    return () => clearInterval(interval);
  }, []);

  // Para las primeras dos frases, animación vertical
  if (current === 0 || current === 1) {
    const letters = phrases[current].split("");
    return (
      <div className={styles.phraseContainer}>
        <p className={styles.letterContainer}>
          {letters.map((letter, i) => {
            // Si es la primera frase, delay de izquierda a derecha;
            // si es la segunda, de derecha a izquierda.
            const delay =
              current === 0
                ? (totalAnimationDuration / letters.length) * i
                : (totalAnimationDuration / letters.length) *
                  (letters.length - i - 1);
            return (
              <span
                key={i}
                className={animate ? styles.dropIn : styles.fadeOutLetter}
                style={{ animationDelay: `${delay}s` }}
              >
                {letter}
              </span>
            );
          })}
        </p>
      </div>
    );
  }

  // Para la tercera frase, animación horizontal de izquierda a derecha
  if (current === 2) {
    const letters = phrases[current].split("");
    return (
      <div className={styles.phraseContainer}>
        <p className={styles.letterContainer}>
          {letters.map((letter, i) => {
            const delay = (totalAnimationDuration / letters.length) * i;
            return (
              <span
                key={i}
                className={animate ? styles.slideInLtr : styles.fadeOutLetter}
                style={{ animationDelay: `${delay}s` }}
              >
                {letter}
              </span>
            );
          })}
        </p>
      </div>
    );
  }

  // Para la cuarta frase, animación horizontal de derecha a izquierda
  if (current === 3) {
    const letters = phrases[current].split("");
    return (
      <div className={styles.phraseContainer}>
        <p className={styles.letterContainer}>
          {letters.map((letter, i) => {
            const delay =
              (totalAnimationDuration / letters.length) *
              (letters.length - i - 1);
            return (
              <span
                key={i}
                className={animate ? styles.slideInRtl : styles.fadeOutLetter}
                style={{ animationDelay: `${delay}s` }}
              >
                {letter}
              </span>
            );
          })}
        </p>
      </div>
    );
  }

  // Para otras frases (si existieran) se usa fade in/out tradicional
  return (
    <div className={styles.phraseContainer}>
      <p
        className={`${styles.phrase} ${
          animate ? styles.fadeIn : styles.fadeOut
        }`}
      >
        {phrases[current]}
      </p>
    </div>
  );
};

export default AnimatedPhrases;
