"use client";
import React, { useRef, useEffect, useState } from "react";
import { AnimatePresence, motion, Variants } from "framer-motion";
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

  const activeIndex = externalIndex ?? internalIndex;
  const setIndex = setExternalIndex ?? setInternalIndex;

  const containerRef = useRef<HTMLDivElement>(null);
  const wheelTimeout = useRef<NodeJS.Timeout>();

  // Autoplay: solo si no está paused
  useEffect(() => {
    if (paused) return;
    const play = () => {
      setDirection(1);
      setIndex((prev) => (prev + 1) % items.length);
    };
    const interval = setInterval(play, autoplayInterval);
    return () => clearInterval(interval);
  }, [items.length, autoplayInterval, setIndex, paused]);

  // Wheel scroll: pausa 2s y cambia índice
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const onWheel = (e: WheelEvent) => {
      e.preventDefault();
      setPaused(true);
      setIsPaused?.(true);
      if (wheelTimeout.current) clearTimeout(wheelTimeout.current);
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
    container.addEventListener("wheel", onWheel, { passive: false });
    return () => container.removeEventListener("wheel", onWheel);
  }, [items.length, setIndex, setIsPaused]);

  return (
    <div className={styles.verticalCarouselWrapper}>
      <section ref={containerRef} className={styles.carousel}>
        <AnimatePresence initial={false} custom={direction}>
          {/* outer motion.div controla la entrada/salida */}
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={swipeVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className={styles.itemVertical}
          >
            {/* nested motion.div SOLO envuelve la card */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              onMouseEnter={() => {
                setPaused(true);
                setIsPaused?.(true);
              }}
              onMouseLeave={() => {
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
