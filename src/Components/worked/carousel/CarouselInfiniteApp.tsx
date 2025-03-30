"use client";
import React, { useRef, useEffect, useState } from "react";
import styles from "../../../styles/worked/carousel/CarouselInfiniteApp.module.css";
import { motion } from "framer-motion";

interface AppsCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  interval?: number;
}

const AppsCarousel = <T,>({
  items,
  renderItem,
  interval = 2000,
}: AppsCarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerHeight, setContainerHeight] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mide el alto del contenedor
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setContainerHeight(containerRef.current.offsetHeight);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play con hover
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [items.length, interval, isHovered]);

  // Animación hacia abajo (se multiplica por -1 para moverse correctamente)
  const animateProp = { y: -activeIndex * containerHeight };

  return (
    <section
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={styles.carousel}
    >
      <motion.div
        animate={animateProp}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={styles.cardContainer}
      >
        {items.map((item, index) => (
          <div key={index} className={styles.itemVertical}>
            {renderItem(item, index)}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default AppsCarousel;
