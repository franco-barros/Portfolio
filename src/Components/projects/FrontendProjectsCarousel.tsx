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

const FrontendProjectsCarousel: React.FC<CarouselProps> = ({ projects }) => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speed = 50;
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 🔄 Duplicamos los proyectos para que el carrusel sea infinito
  const items = useMemo(() => {
    const reversed = [...projects].reverse();
    return [...reversed, ...reversed]; // Duplicación para scroll infinito
  }, [projects]);

  // 🚀 Función para iniciar la animación continua del carrusel
  const startAnimation = useCallback(() => {
    if (carouselRef.current) {
      const fullWidth = carouselRef.current.scrollWidth / 2;
      const duration = fullWidth / speed;
      controls.set({ x: -fullWidth });
      controls.start({
        x: 0,
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

  // 🖱️ Manejo del scroll manual para pausar y reanudar
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      controls.stop();
      x.set(x.get() - e.deltaY);

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

export default FrontendProjectsCarousel;
