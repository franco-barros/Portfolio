"use client";
import React, { useState, useEffect } from "react";
import styles from "../../../styles/worked/shared/CardCarousel.module.css";

interface CardCarouselProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
  autoRotateInterval?: number;
}

const CardCarousel = <T,>({
  items,
  renderItem,
  autoRotateInterval = 3000,
}: CardCarouselProps<T>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (items.length === 0) return;
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, autoRotateInterval);
    return () => clearInterval(interval);
  }, [items, autoRotateInterval]);

  return (
    <div className={styles.carousel}>
      <div className={styles.cardContainer}>
        {renderItem(items[currentIndex])}
      </div>
    </div>
  );
};

export default CardCarousel;
