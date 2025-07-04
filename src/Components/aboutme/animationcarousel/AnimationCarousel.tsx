"use client";
import React from "react";
import styles from "../../../styles/AboutMe.module.css";

interface AnimationCarouselProps {
  animations: React.ReactNode[];
  currentIndex: number;
}

const AnimationCarousel: React.FC<AnimationCarouselProps> = ({
  animations,
  currentIndex,
}) => {
  return (
    <div className={styles.animationCarousel}>
      <div className={styles.animationDisplay}>{animations[currentIndex]}</div>
    </div>
  );
};

export default AnimationCarousel;
