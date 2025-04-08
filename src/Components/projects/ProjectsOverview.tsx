"use client";
import React from "react";
import styles from "../../styles/projects/ProjectsOverview.module.css";
import FrontendProjectsCarousel from "./FrontendProjectsCarousel";
import BackendProjectsCarousel from "./BackendProjectsCarousel";
import { projectsData, ProjectData } from "../../data/Project/ProjectsData";

const projectsArray = Object.values(projectsData).map(
  (project: ProjectData) => ({
    projectsId: project.id,
    ...project,
    category: [
      "market-multiverse",
      "listify",
      "lt-estetica-vehicular-landing-page",
    ].includes(project.id)
      ? "frontend"
      : "backend",
    image: `/assets/images/${project.images[0]}`,
  })
);

const ProjectsOverview = () => {
  const frontendProjects = projectsArray.filter(
    (proj) => proj.category === "frontend"
  );
  const backendProjects = projectsArray.filter(
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
