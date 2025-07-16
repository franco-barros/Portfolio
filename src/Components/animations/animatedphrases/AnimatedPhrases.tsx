"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/animations/AnimatedPhrases.module.css";

const phrases = [
  "Problem solver",
  "Passionate developer",
  "Efficient solutions finder",
  "Technology innovator",
];

// Función para generar el delay en segundos por letra según la animación
function getAnimationDelay(index: number, length: number, type: "ltr" | "rtl") {
  const totalAnimationDuration = 0.5;
  if (type === "ltr") return (totalAnimationDuration / length) * index;
  else return (totalAnimationDuration / length) * (length - index - 1);
}

// Función para renderizar una frase con animación letra por letra
function renderAnimatedPhrase(
  phrase: string,
  animate: boolean,
  animationClass: string,
  delayType: "ltr" | "rtl"
) {
  const letters = phrase.split("");
  return (
    <div className={styles.phraseContainer}>
      <p className={styles.letterContainer}>
        {letters.map((letter, idx) => {
          const delay = getAnimationDelay(idx, letters.length, delayType);
          const key = `${letter}-${idx}`;
          return (
            <span
              key={key}
              className={animate ? animationClass : styles.fadeOutLetter}
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

const AnimatedPhrases = () => {
  const [current, setCurrent] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    function restartAnimation() {
      setCurrent((prev) => (prev + 1) % phrases.length);
      setAnimate(true);
    }

    function updatePhrase() {
      setAnimate(false);
      setTimeout(restartAnimation, 500);
    }

    const interval = setInterval(updatePhrase, 3000);
    return () => clearInterval(interval);
  }, []);

  const phrase = phrases[current];

  switch (current) {
    case 0:
      // Animación vertical de arriba hacia abajo (dropIn) delay izquierda a derecha
      return renderAnimatedPhrase(phrase, animate, styles.dropIn, "ltr");
    case 1:
      // Animación vertical de arriba hacia abajo (dropIn) delay derecha a izquierda
      return renderAnimatedPhrase(phrase, animate, styles.dropIn, "rtl");
    case 2:
      // Animación horizontal izquierda a derecha (slideInLtr)
      return renderAnimatedPhrase(phrase, animate, styles.slideInLtr, "ltr");
    case 3:
      // Animación horizontal derecha a izquierda (slideInRtl)
      return renderAnimatedPhrase(phrase, animate, styles.slideInRtl, "rtl");
    default:
      // Si hay más frases (no contempladas), fade in/out normal
      return (
        <div className={styles.phraseContainer}>
          <p
            className={`${styles.phrase} ${
              animate ? styles.fadeIn : styles.fadeOut
            }`}
          >
            {phrase}
          </p>
        </div>
      );
  }
};

export default AnimatedPhrases;
