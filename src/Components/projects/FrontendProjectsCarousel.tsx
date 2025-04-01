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
  const speed = 50; // Velocidad del scroll infinito
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Duplicamos los proyectos para lograr el efecto infinito y, para el frontend, invertimos el orden
  const items = useMemo(() => {
    const reversed = [...projects].reverse();
    return [...reversed, ...reversed];
  }, [projects]);

  // Función para iniciar la animación infinita: desde -fullWidth hasta 0
  const startAnimation = useCallback(() => {
    if (carouselRef.current) {
      const fullWidth = carouselRef.current.scrollWidth / 2;
      const duration = fullWidth / speed;
      // Posición inicial para lograr el scroll infinito
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

  // Detiene la animación y limpia el timeout
  const stopAnimation = useCallback(() => {
    controls.stop();
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = null;
    }
  }, [controls]);

  // Reanuda la animación luego de 2000ms de inactividad
  const resumeAnimation = useCallback(() => {
    stopAnimation();
    scrollTimeoutRef.current = setTimeout(() => {
      startAnimation();
    }, 2000);
  }, [startAnimation, stopAnimation]);

  // Iniciar la animación al montar el componente
  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
    };
  }, [startAnimation, controls]);

  // Manejo del scroll manual con el mouse wheel (para web y mobile con rueda)
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      controls.stop();
      // Ajustamos la posición manualmente; al sumar deltaY se acerca a 0 (movimiento hacia la derecha)
      x.set(x.get() + e.deltaY);

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
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
        drag="x" // Habilita el arrastre (drag) para interacción táctil
        dragElastic={0.2}
        whileTap={{ cursor: "grabbing" }}
        onDragStart={() => stopAnimation()}
        onDragEnd={() => resumeAnimation()}
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
