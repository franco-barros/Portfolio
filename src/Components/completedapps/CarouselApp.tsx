// CompletedAppsCarousel.tsx
"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../styles/completedapps/CarouselApp.module.css";
import { useTouchNavigation } from "../../hooks/CarouselApp/useTouchNavigation";
import { useCardHeight } from "../../hooks/CarouselApp/useCardHeight";

interface CompletedAppsCarouselProps<T extends { name: string }> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  activeIndex?: number;
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused?: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompletedAppsCarousel = <T extends { name: string }>({
  items,
  renderItem,
  activeIndex: externalIndex,
  setActiveIndex: setExternalIndex,
  setIsPaused,
}: CompletedAppsCarouselProps<T>) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const activeIndex = externalIndex ?? internalIndex;
  const setActive = setExternalIndex ?? setInternalIndex;

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const cardHeight = useCardHeight(cardRef);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Swipe en touch
  useTouchNavigation(containerRef, setActive, items.length);

  // Wheel solo en hover desktop
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const onWheel = (e: WheelEvent) => {
      if (!isHovered) return;
      e.preventDefault();
      setIsPaused?.(true);
      clearTimeout(timeoutRef.current!);
      timeoutRef.current = setTimeout(() => setIsPaused?.(false), 2000);
      setActive((i) =>
        e.deltaY > 0
          ? (i + 1) % items.length
          : (i - 1 + items.length) % items.length
      );
    };
    c.addEventListener("wheel", onWheel, { passive: false });
    return () => c.removeEventListener("wheel", onWheel);
  }, [isHovered, items.length, setActive, setIsPaused]);

  // Cálculo de desplazamiento vertical
  const gap = 15;
  const h = cardHeight || containerRef.current?.offsetHeight || 325;
  const animateProp = {
    y: -activeIndex * (h + gap),
    transition: { duration: 0.5, ease: "easeInOut" },
  };

  return (
    <div className={styles.verticalCarouselWrapper}>
      <section
        ref={containerRef}
        className={styles.carousel}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <motion.div animate={animateProp} className={styles.cardContainer}>
          {items.map((item, idx) => (
            <div
              key={idx}
              ref={idx === 0 ? cardRef : null}
              className={styles.itemVertical}
            >
              <div className={styles.cardInner}>
                <div className={styles.appContent}>{renderItem(item, idx)}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default CompletedAppsCarousel;
