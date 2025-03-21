"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/animations/AnimatedPhrases.module.css";

const phrases = [
  "Problem solver",
  "Efficient solutions finder",
  "Passionate developer",
  "Technology innovator",
];

const AnimatedPhrases = () => {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      // Start the fade out
      setFade(false);
      // After 500ms (fade out time), change the phrase and fade in
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % phrases.length);
        setFade(true);
      }, 500);
    }, 2000); // Change the phrase every 3 seconds

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
