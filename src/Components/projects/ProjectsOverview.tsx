import styles from "../../styles/projects/ProjectsOverview.module.css";
import FrontendProjectsCarousel from "./FrontendProjectsCarousel";
import BackendProjectsCarousel from "./BackendProjectsCarousel";
import { projectsData } from "../../data/Project/ProjectsData";
import type { ProjectData } from "../../data/Project/types";

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
      <h2 className={styles.projectsTitle}>Projects</h2>

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
