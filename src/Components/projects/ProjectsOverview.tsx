"use client";
import React from "react";
import styles from "../../styles/projects/ProjectsOverview.module.css";
import ProjectsCarousel from "./ProjectsCarousel";

const projectData = [
  {
    title: "Market Multiverse",
    image: "/images/market-multiverse.png",
    link: "https://francoisdev-market-multiverse.com",
    linkText: "View Project",
    technologies: ["React", "CSS Modules", "Next.js"],
    category: "frontend",
  },
  {
    title: "Listify",
    image: "/images/listify.png",
    link: "https://github.com/francoisrosales/Listify",
    linkText: "View Project",
    technologies: ["React", "CSS Modules", "JavaScript"],
    category: "frontend",
  },
  {
    title: "TaskFlow",
    image: "/images/taskflow.png",
    link: "https://github.com/francoisrosales/TaskFlow",
    linkText: "View Project",
    technologies: ["React", "Redux", "Firebase"],
    category: "frontend",
  },
  {
    title: "DevConnect",
    image: "/images/devconnect.png",
    link: "https://github.com/francoisrosales/DevConnect",
    linkText: "View Project",
    technologies: ["Java", "Node.js", "MongoDB"],
    category: "backend",
  },
  {
    title: "CryptoStats",
    image: "/images/cryptostats.png",
    link: "https://cryptostats-live.com",
    linkText: "View Project",
    technologies: ["Java", "Spring boot", "Node.js"],
    category: "backend",
  },
  {
    title: "WeatherNow",
    image: "/images/weathernow.png",
    link: "https://weathernow-app.com",
    linkText: "View Project",
    technologies: ["Express", "Nest.js", "OpenWeather API"],
    category: "backend",
  },
];

const Projects = () => {
  const frontendProjects = projectData.filter(
    (proj) => proj.category === "frontend"
  );
  const backendProjects = projectData.filter(
    (proj) => proj.category === "backend"
  );

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className="globalTitle">Projects</h2>

      {/* Bloque para los proyectos frontend */}
      <div className={styles.categoryContainer}>
        <h3 className={styles.categoryTitle}>Frontend Projects</h3>
        <ProjectsCarousel projects={frontendProjects} direction="right" />
      </div>

      {/* Bloque para los proyectos backend */}
      <div className={styles.categoryContainer}>
        <h3 className={styles.categoryTitle}>Backend Projects</h3>
        <ProjectsCarousel projects={backendProjects} direction="left" />
      </div>
    </section>
  );
};

export default Projects;
