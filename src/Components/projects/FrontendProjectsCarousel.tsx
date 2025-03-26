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

interface FrontendProjectsCarouselProps {
  projects: ProjectData[];
}

const FrontendProjectsCarousel: React.FC<FrontendProjectsCarouselProps> = ({
  projects,
}) => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speed = 50; // velocidad en píxeles por segundo
  // Ref para el timer que reanuda la animación
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Duplicamos y revertimos los proyectos para lograr el orden inverso
  const items = useMemo(() => {
    const reversed = [...projects].reverse();
    return [...reversed, ...reversed];
  }, [projects]);

  // Función para iniciar la animación automática (mueve de izquierda a derecha)
  const startAnimation = useCallback(() => {
    if (carouselRef.current) {
      const fullWidth = carouselRef.current.offsetWidth;
      const halfWidth = fullWidth / 2;
      const duration = halfWidth / speed;
      // Establecer la posición inicial para que muestre el final (último proyecto)
      controls.set({ x: -halfWidth });
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

  // Listener para scroll (wheel)
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;
    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      controls.stop();
      x.set(x.get() - e.deltaY);
      // Limpiar timer previo
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
      // Reanudar la animación después de 2 segundos de inactividad
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
          // Si el usuario sale y no está haciendo scroll, reanuda la animación
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

export default FrontendProjectsCarousel;
