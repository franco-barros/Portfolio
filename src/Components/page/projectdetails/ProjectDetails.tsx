import styles from "../../../styles/page/ProjectsDetail.module.css";
import { projectsData } from "../../../data/ProjectsData";

export interface ProjectDetailsProps {
  projectsId: string;
  showTitle?: boolean;
}

const ProjectDetails: React.FC<ProjectDetailsProps> = ({
  projectsId,
  showTitle = true,
}) => {
  const project = projectsData[projectsId];

  if (!project) {
    return <p className={styles.notFound}>Proyecto no encontrado.</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      {showTitle && <h1 className={styles.title}>{project.title}</h1>}
      <p className={styles.description}>{project.description}</p>
      <div className={styles.technologies}>
        <span className={styles.label}>Tecnologías:</span>
        <span className={styles.techList}>
          {project.technologies.join(", ")}
        </span>
      </div>

      {project.github && (
        <div className={styles.githubLink}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
          >
            Ver en GitHub
          </a>
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
