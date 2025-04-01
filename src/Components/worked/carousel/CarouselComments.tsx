"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/worked/carousel/CarouselComments.module.css";

interface CommentsCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  interval?: number;
}

const CommentsCarousel = <T,>({
  items,
  renderItem,
  interval = 2000,
}: CommentsCarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [cardHeight, setCardHeight] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mide el alto de la tarjeta y actualiza el valor en cada resize
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

  // Auto-play que se pausa al pasar el cursor sobre el carousel
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [items.length, interval, isHovered]);

  // Scroll manual con el ratón
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      if (e.deltaY > 0) {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      } else if (e.deltaY < 0) {
        setActiveIndex(
          (prevIndex) => (prevIndex - 1 + items.length) % items.length
        );
      }
    };
    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [items.length]);

  const gap = 15;
  const effectiveCardHeight = cardHeight || 392;
  const animateProp = { y: -activeIndex * (effectiveCardHeight + gap) };

  return (
    <div className={styles.verticalCarouselWrapper}>
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
            <div
              key={index}
              ref={index === 0 ? cardRef : null} // Se asigna la ref solo a la primera tarjeta
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
