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

interface ProjectsCarouselProps {
  projects: ProjectData[];
  direction: "left" | "right";
}

const ProjectsCarousel: React.FC<ProjectsCarouselProps> = ({
  projects,
  direction,
}) => {
  const controls = useAnimation();
  const carouselRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const speed = 50; // velocidad en píxeles por segundo

  // Función para iniciar la animación automática con duración calculada
  const startAnimation = useCallback(() => {
    if (carouselRef.current) {
      const distance = carouselRef.current.offsetWidth;
      const duration = distance / speed; // duración basada en la velocidad fija
      controls.start({
        x: direction === "left" ? -distance : distance,
        transition: { duration, ease: "linear", repeat: Infinity },
      });
    }
  }, [controls, direction, speed]);

  useEffect(() => {
    startAnimation();
    return () => {
      controls.stop();
    };
  }, [startAnimation, controls]);

  // Usar un useEffect para agregar un listener de 'wheel' no pasivo
  useEffect(() => {
    const element = carouselRef.current;
    if (!element) return;

    const wheelHandler = (e: WheelEvent) => {
      e.preventDefault();
      e.stopPropagation();
      controls.stop();
      // Actualizar el valor de x manualmente
      x.set(x.get() - e.deltaY);
    };

    // Agregar listener con opción { passive: false }
    element.addEventListener("wheel", wheelHandler, { passive: false });

    return () => {
      element.removeEventListener("wheel", wheelHandler);
    };
  }, [controls, x]);

  // Duplicar los proyectos hasta alcanzar o superar la cantidad deseada
  const items = useMemo(() => {
    const minItems = 12;
    let dupItems = [...projects];
    while (dupItems.length < minItems) {
      dupItems = [...dupItems, ...projects];
    }
    return dupItems;
  }, [projects]);

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
        onMouseLeave={() => startAnimation()}
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

export default ProjectsCarousel;
