"use client";
import React from "react";
import styles from "../../styles/projects/ProjectsOverview.module.css";
import FrontendProjectsCarousel from "./FrontendProjectsCarousel";
import BackendProjectsCarousel from "./BackendProjectsCarousel";

const projectData = [
  {
    projectsId: "market-multiverse",
    title: "Market Multiverse",
    image: "/assets/images/MultiverMarket.png",
    technologies: ["React", "CSS Modules", "Next.js"],
    category: "frontend",
  },
  {
    projectsId: "listify",
    title: "Listify",
    image: "/assets/images/Listify.png",
    technologies: ["React", "CSS Modules", "JavaScript"],
    category: "frontend",
  },
  {
    projectsId: "taskflow",
    title: "TaskFlow",
    image: "/assets/images/MultiverMarket.png",
    technologies: ["React", "Redux", "Firebase"],
    category: "frontend",
  },
  {
    projectsId: "devconnect",
    title: "DevConnect",
    image: "/assets/images/MultiverMarket.png",
    technologies: ["Java", "Node.js", "MongoDB"],
    category: "backend",
  },
  {
    projectsId: "cryptostats",
    title: "CryptoStats",
    image: "/assets/images/MultiverMarket.png",
    technologies: ["Java", "Spring Boot", "Node.js"],
    category: "backend",
  },
  {
    projectsId: "weathernow",
    title: "WeatherNow",
    image: "/assets/images/MultiverMarket.png",
    technologies: ["Express", "Nest.js", "OpenWeather API"],
    category: "backend",
  },
];

const ProjectsOverview = () => {
  const frontendProjects = projectData.filter(
    (proj) => proj.category === "frontend"
  );
  const backendProjects = projectData.filter(
    (proj) => proj.category === "backend"
  );

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className="globalTitle">Projects</h2>

      {/* Sección de proyectos frontend */}
      <div className={styles.categoryContainer}>
        <h3 className={styles.categoryTitle}>Frontend Projects</h3>
        <FrontendProjectsCarousel projects={frontendProjects} />
      </div>

      {/* Sección de proyectos backend */}
      <div className={styles.categoryContainer}>
        <h3 className={styles.categoryTitle}>Backend Projects</h3>
        <BackendProjectsCarousel projects={backendProjects} />
      </div>
    </section>
  );
};

export default ProjectsOverview;
