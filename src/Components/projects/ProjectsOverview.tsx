"use client";
import styles from "../../styles/projects/ProjectsOverview.module.css";
import FrontendProjectsCarousel from "./FrontendProjectsCarousel";
import BackendProjectsCarousel from "./BackendProjectsCarousel";
import { projectsData } from "../../data/Project/ProjectsData";
import type { ProjectData } from "../../data/Project/types";
import { FadeInOnScroll } from "../shared/fadeInonscroll";

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
    image: project.images[0],
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
      <FadeInOnScroll>
        <h2 className={styles.projectsTitle}>Projects</h2>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.1}>
        <div className={styles.categoryContainer}>
          <h3 className={styles.categoryTitle}>Frontend Projects</h3>
          <FrontendProjectsCarousel projects={frontendProjects} />
        </div>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.2}>
        <div className={styles.categoryContainer}>
          <h3 className={styles.categoryTitle}>Backend Projects</h3>
          <BackendProjectsCarousel projects={backendProjects} />
        </div>
      </FadeInOnScroll>
    </section>
  );
};

export default ProjectsOverview;
