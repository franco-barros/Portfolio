"use client";
import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion, Variants, PanInfo } from "framer-motion";
import styles from "../../styles/collaboratorcommets/CarouselComments.module.css";

interface CommentsCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  activeIndex?: number;
  setActiveIndex?: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused?: React.Dispatch<React.SetStateAction<boolean>>;
  autoplayInterval?: number;
}

const swipeVariants: Variants = {
  enter: (dir: number) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
  }),
  center: {
    x: "0%",
    opacity: 1,
  },
  exit: (dir: number) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
  }),
};

const CommentsCarousel = <T,>({
  items,
  renderItem,
  activeIndex: externalIndex,
  setActiveIndex: setExternalIndex,
  setIsPaused,
  autoplayInterval = 3000,
}: CommentsCarouselProps<T>) => {
  const [internalIndex, setInternalIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [paused, setPaused] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const activeIndex = externalIndex ?? internalIndex;
  const setIndex = setExternalIndex ?? setInternalIndex;
  const containerRef = useRef<HTMLDivElement>(null);
  const wheelTimeout = useRef<NodeJS.Timeout>();

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const play = () => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % items.length);
    };
    const interval = setInterval(play, autoplayInterval);
    return () => clearInterval(interval);
  }, [items.length, autoplayInterval, setIndex, paused]);

  // Wheel scroll (desktop hover only)
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;

    const onWheel = (e: WheelEvent) => {
      if (!isHovered) return;
      e.preventDefault();
      setPaused(true);
      setIsPaused?.(true);
      clearTimeout(wheelTimeout.current!);
      wheelTimeout.current = setTimeout(() => {
        setPaused(false);
        setIsPaused?.(false);
      }, 2000);

      if (e.deltaY > 0) {
        setDirection(1);
        setIndex((prev) => (prev + 1) % items.length);
      } else {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + items.length) % items.length);
      }
    };

    c.addEventListener("wheel", onWheel, { passive: false });
    return () => c.removeEventListener("wheel", onWheel);
  }, [items.length, setIndex, setIsPaused, isHovered]);

  // Drag (mobile swipe)
  const handleDragEnd = (event: MouseEvent | TouchEvent, info: PanInfo) => {
    const offsetY = info.offset.y;
    if (offsetY < -50) {
      setDirection(1);
      setIndex((prev) => (prev + 1) % items.length);
    } else if (offsetY > 50) {
      setDirection(-1);
      setIndex((prev) => (prev - 1 + items.length) % items.length);
    }
  };

  return (
    <div className={styles.verticalCarouselWrapper}>
      <section ref={containerRef} className={styles.carousel}>
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={swipeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={styles.itemVertical}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.2}
            onDragEnd={handleDragEnd}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => {
                if (window.matchMedia("(hover: hover)").matches) {
                  setIsHovered(true);
                  setPaused(true);
                  setIsPaused?.(true);
                }
              }}
              onMouseLeave={() => {
                setIsHovered(false);
                setPaused(false);
                setIsPaused?.(false);
              }}
            >
              {renderItem(items[activeIndex], activeIndex)}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </section>
    </div>
  );
};

export default CommentsCarousel;
