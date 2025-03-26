"use client";
import React, { useEffect, useRef, useMemo, useCallback } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import ProjectCard from "./ProjectCard";
import styles from "../../styles/projects/ProjectsCarousel.module.css";

interface ProjectData {
  title: string;
  image: string;
  link: string;
  technologies: string[];
}

interface BackendProjectsCarouselProps {
  projects: ProjectData[];
}

const BackendProjectsCarousel: React.FC<BackendProjectsCarouselProps> = ({
  projects,
}) => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speed = 50; // velocidad en píxeles por segundo
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Duplicamos los proyectos para el loop continuo
  const items = useMemo(() => [...projects, ...projects], [projects]);

  // Función para iniciar la animación automática (mueve de 0 a la izquierda)
  const startAnimation = useCallback(() => {
    if (carouselRef.current) {
      const fullWidth = carouselRef.current.offsetWidth;
      const halfWidth = fullWidth / 2;
      const duration = halfWidth / speed;
      // Inicia en 0 y anima hasta -halfWidth
      controls.set({ x: 0 });
      controls.start({
        x: -halfWidth,
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

  // Listener para scroll (wheel)
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      controls.stop();
      x.set(x.get() - e.deltaY);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      scrollTimeoutRef.current = setTimeout(() => {
        startAnimation();
      }, 2000);
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
        onMouseEnter={() => controls.stop()}
        onMouseLeave={() => {
          if (!scrollTimeoutRef.current) startAnimation();
        }}
      >
        {items.map((project, index) => (
          <div key={index} className={styles.carouselItem}>
            <ProjectCard
              title={project.title}
              image={project.image}
              technologies={project.technologies}
              link={project.link}
            />
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default BackendProjectsCarousel;
