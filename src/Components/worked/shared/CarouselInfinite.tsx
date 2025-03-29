"use client";
import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Identifiable {
  id?: string;
}

interface InfiniteCarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  interval?: number;
  orientation?: "horizontal" | "vertical";
}

const InfiniteCarousel = <T,>({
  items,
  renderItem,
  interval = 2000,
  orientation = "horizontal",
}: InfiniteCarouselProps<T>) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerSize, setContainerSize] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);

  // Mide el tamaño del contenedor
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const size =
          orientation === "horizontal"
            ? containerRef.current.offsetWidth
            : containerRef.current.offsetHeight;
        setContainerSize(size);
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Calcular tamaño al inicio

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [orientation]);

  // Auto-play con hover
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
      }, interval);
      return () => clearInterval(timer);
    }
  }, [items.length, interval, isHovered]);

  const handlePrev = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const animateProp =
    orientation === "horizontal"
      ? { x: -activeIndex * containerSize }
      : { y: -activeIndex * containerSize };

  const flexDir: "row" | "column" =
    orientation === "vertical" ? "column" : "row";

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  return (
    <section
      aria-label="Infinite Carousel"
      className="carousel"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ overflow: "hidden", position: "relative" }}
    >
      <motion.div
        animate={animateProp}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="cardContainer"
        style={{
          display: "flex",
          flexDirection: flexDir,
        }}
      >
        {items.map((item, index) => {
          const maybeId = (item as Partial<Identifiable>).id;
          const key = maybeId !== undefined ? maybeId : `item-${index}`;
          return (
            <div
              key={key}
              className={
                orientation === "horizontal"
                  ? "item-horizontal"
                  : "item-vertical"
              }
            >
              {renderItem(item, index)}
            </div>
          );
        })}
      </motion.div>

      <button
        className="navButton prev"
        onClick={handlePrev}
        aria-label="Previous Item"
      >
        Prev
      </button>
      <button
        className="navButton next"
        onClick={handleNext}
        aria-label="Next Item"
      >
        Next
      </button>
    </section>
  );
};

export default InfiniteCarousel;
