"use client";
import React from "react";
import styles from "../../styles/projects/ProjectsOverview.module.css";
import FrontendProjectsCarousel from "./FrontendProjectsCarousel";
import BackendProjectsCarousel from "./BackendProjectsCarousel";

const projectData = [
  {
    title: "Market Multiverse",
    image: "assets/images/MultiverMarket.png",
    link: "https://francoisdev-market-multiverse.com",
    linkText: "View Project",
    technologies: ["React", "CSS Modules", "Next.js"],
    category: "frontend",
  },
  {
    title: "Listify",
    image: "assets/images/Listify.png",
    link: "https://github.com/francoisrosales/Listify",
    linkText: "View Project",
    technologies: ["React", "CSS Modules", "JavaScript"],
    category: "frontend",
  },
  {
    title: "TaskFlow",
    image: "assets/images/MultiverMarket.png",
    link: "https://github.com/francoisrosales/TaskFlow",
    linkText: "View Project",
    technologies: ["React", "Redux", "Firebase"],
    category: "frontend",
  },
  {
    title: "DevConnect",
    image: "assets/images/MultiverMarket.png",
    link: "https://github.com/francoisrosales/DevConnect",
    linkText: "View Project",
    technologies: ["Java", "Node.js", "MongoDB"],
    category: "backend",
  },
  {
    title: "CryptoStats",
    image: "assets/images/MultiverMarket.png",
    link: "https://cryptostats-live.com",
    linkText: "View Project",
    technologies: ["Java", "Spring boot", "Node.js"],
    category: "backend",
  },
  {
    title: "WeatherNow",
    image: "assets/images/MultiverMarket.png",
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
        <FrontendProjectsCarousel projects={frontendProjects} />
      </div>

      {/* Bloque para los proyectos backend */}
      <div className={styles.categoryContainer}>
        <h3 className={styles.categoryTitle}>Backend Projects</h3>
        <BackendProjectsCarousel projects={backendProjects} />
      </div>
    </section>
  );
};

export default Projects;
