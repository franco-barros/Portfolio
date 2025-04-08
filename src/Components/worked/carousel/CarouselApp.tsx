"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/worked/carousel/CarouselApp.module.css";
import { useTouchNavigation } from "../../../hooks/CarouselApp/useTouchNavigation";
import { useCardHeight } from "../../../hooks/CarouselApp/useCardHeight";

interface CompletedAppsCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  activeIndex?: number;
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused?: React.Dispatch<React.SetStateAction<boolean>>; // agregado
}

const CompletedAppsCarousel = <T,>({
  items,
  renderItem,
  activeIndex: externalIndex,
  setActiveIndex: setExternalIndex,
  setIsPaused, // agregado
}: CompletedAppsCarouselProps<T>) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = externalIndex ?? internalIndex;
  const setActiveIndex = setExternalIndex ?? setInternalIndex;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardHeight = useCardHeight(cardRef);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null); // para restaurar autoplay

  useTouchNavigation(containerRef, setActiveIndex, items.length);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Pausar autoplay temporalmente
      setIsPaused?.(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsPaused?.(false), 2000);

      // Navegación
      if (e.deltaY > 0) {
        setActiveIndex((prev) => (prev + 1) % items.length);
      } else {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [items.length, setActiveIndex, setIsPaused]);

  const gap = 15;
  const effectiveCardHeight = cardHeight || 392;
  const animateProp = {
    y: -activeIndex * (effectiveCardHeight + gap),
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <div className={styles.verticalCarouselWrapper}>
      <section
        ref={containerRef}
        className={styles.carousel}
        onMouseEnter={() => setIsPaused?.(true)}
        onMouseLeave={() => setIsPaused?.(false)}
      >
        <motion.div animate={animateProp} className={styles.cardContainer}>
          {items.map((item, index) => (
            <div
              key={index}
              ref={index === 0 ? cardRef : null}
              className={styles.itemVertical}
            >
              {renderItem(item, index)}
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default CompletedAppsCarousel;
