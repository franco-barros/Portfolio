"use client";
import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import ProjectCard from "./ProjectCard";
import styles from "../../styles/projects/ProjectsCarousel.module.css";

interface ProjectData {
  projectsId: string;
  title: string;
  image: string;
  technologies: string[];
}

interface CarouselProps {
  projects: ProjectData[];
}

const BackendProjectsCarousel: React.FC<CarouselProps> = ({ projects }) => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speed = 50;
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 🔄 Duplicamos los proyectos y los dejamos en su orden original para backend
  const items = useMemo(() => [...projects, ...projects], [projects]);

  // 🚀 Animación en sentido contrario (derecha a izquierda)
  const startAnimation = useCallback(() => {
    if (carouselRef.current) {
      const fullWidth = carouselRef.current.scrollWidth / 2;
      const duration = fullWidth / speed;
      controls.set({ x: 0 });
      controls.start({
        x: -fullWidth,
        transition: {
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop",
        },
      });
    }
  }, [controls, speed]);

  useEffect(() => {
    startAnimation();
    return () => controls.stop();
  }, [startAnimation, controls]);

  // 🖱️ Manejo del scroll manual
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      controls.stop();
      x.set(x.get() + e.deltaY); // 🔄 Invertimos la dirección del scroll manual

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => startAnimation(), 2000);
    };

    element.addEventListener("wheel", wheelHandler, { passive: false });
    return () => {
      element.removeEventListener("wheel", wheelHandler);
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [controls, x, startAnimation]);

  return (
    <div className={styles.carouselWrapper}>
      <motion.div
        className={styles.carousel}
        ref={carouselRef}
        style={{ x }}
        animate={controls}
        initial={false}
        drag="x"
        dragElastic={0.1}
        whileTap={{ cursor: "grabbing" }}
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => {
          if (!scrollTimeoutRef.current) startAnimation();
        }}
      >
        {items.map((project, index) => (
          <motion.div
            key={`${project.projectsId}-${index}`}
            className={styles.carouselItem}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default BackendProjectsCarousel;
