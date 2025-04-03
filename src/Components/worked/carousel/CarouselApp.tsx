"use client";
import React, {
  useRef,
  useEffect,
  useState,
  useMemo,
  useCallback,
} from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/worked/carousel/CarouselApp.module.css";
import { useAutoPlay } from "../../../hooks/useAppAutoPlay";
import { useWheelScrollImmediate } from "../../../hooks/useWheelScrollDebounced";

interface CarouselItem {
  name: string;
}

interface AppsCarouselProps<T extends CarouselItem> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  interval?: number;
  syncIndex?: number;
  setSyncIndex?: (index: number) => void;
}

const AppsCarousel = <T extends CarouselItem>({
  items,
  renderItem,
  interval = 2000,
  syncIndex,
  setSyncIndex,
}: AppsCarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(syncIndex ?? 0);
  const [cardHeight, setCardHeight] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const startY = useRef(0);

  const originalLength = items.length;
  const duplicatedItems = useMemo(() => [...items, ...items], [items]);

  useEffect(() => {
    const handleResize = () => {
      if (cardRef.current) {
        setCardHeight(cardRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleWheelUpdate = useCallback(
    (delta: number) => {
      const newIndex = (activeIndex + delta + originalLength) % originalLength;
      setActiveIndex(newIndex);
      if (setSyncIndex) setSyncIndex(newIndex);
    },
    [activeIndex, originalLength, setSyncIndex]
  );

  const isUserScrolling = useWheelScrollImmediate(
    containerRef,
    handleWheelUpdate,
    300
  );

  const direction = 1; // o -1, según lo que desees

  useAutoPlay(
    activeIndex,
    (value: React.SetStateAction<number>) => {
      setActiveIndex((prev) => {
        const newValue =
          typeof value === "function"
            ? (value as (prev: number) => number)(prev)
            : value;
        if (setSyncIndex) setSyncIndex(newValue);
        return newValue;
      });
    },
    interval,
    isHovered,
    isUserScrolling || isTouching,
    direction
  );

  useEffect(() => {
    if (syncIndex !== undefined && syncIndex !== activeIndex) {
      setActiveIndex(syncIndex);
    }
  }, [syncIndex, activeIndex]);

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    setIsTouching(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const deltaY = e.touches[0].clientY - startY.current;

    if (Math.abs(deltaY) > 30) {
      const newIndex =
        deltaY < 0
          ? (activeIndex + 1) % originalLength
          : (activeIndex - 1 + originalLength) % originalLength;
      setActiveIndex(newIndex);
      if (setSyncIndex) setSyncIndex(newIndex);
    }
  };

  const handleTouchEnd = () => {
    setTimeout(() => setIsTouching(false), 300);
  };

  const effectiveCardHeight = cardHeight || 392;
  const animateProp = {
    y: -activeIndex * effectiveCardHeight,
    transition: { duration: 1.5, ease: "easeInOut" },
  };

  return (
    <div className={styles.verticalCarouselWrapper}>
      <section
        ref={containerRef}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        className={styles.carousel}
        aria-label="Aplicaciones en carrusel"
      >
        <motion.div animate={animateProp} className={styles.cardContainer}>
          {duplicatedItems.map((item, index) => (
            <div
              key={`${index}-${item.name}`}
              ref={index === 0 ? cardRef : null}
              className={styles.itemVertical}
            >
              {renderItem(item, index % originalLength)}
            </div>
          ))}
        </motion.div>
      </section>
    </div>
  );
};

export default AppsCarousel;
