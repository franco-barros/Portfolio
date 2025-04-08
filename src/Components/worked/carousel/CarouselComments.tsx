"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/worked/carousel/CarouselComments.module.css";
import { useCardHeight } from "../../../hooks/CarouselApp/useCardHeight";

interface CommentsCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  activeIndex?: number;
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused?: React.Dispatch<React.SetStateAction<boolean>>; // agregado
}

const CommentsCarousel = <T,>({
  items,
  renderItem,
  activeIndex: externalIndex,
  setActiveIndex: setExternalIndex,
  setIsPaused, // agregado
}: CommentsCarouselProps<T>) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const activeIndex = externalIndex ?? internalIndex;
  const setActiveIndex = setExternalIndex ?? setInternalIndex;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardHeight = useCardHeight(cardRef);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      // Pausar autoplay temporalmente
      setIsPaused?.(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setIsPaused?.(false), 2000);

      if (e.deltaY > 0) {
        setActiveIndex((prev) => (prev + 1) % items.length);
      } else if (e.deltaY < 0) {
        setActiveIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [items.length, setActiveIndex, setIsPaused]);

  const gap = 15;
  const effectiveCardHeight = cardHeight || 392;
  const animateProp = { y: -activeIndex * (effectiveCardHeight + gap) };

  return (
    <div className={styles.verticalCarouselWrapper}>
      <section
        ref={containerRef}
        className={styles.carousel}
        onMouseEnter={() => setIsPaused?.(true)}
        onMouseLeave={() => setIsPaused?.(false)}
      >
        <motion.div
          animate={animateProp}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className={styles.cardContainer}
        >
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

export default CommentsCarousel;
