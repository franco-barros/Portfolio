import styles from "../../../styles/page/ProjectsDetail.module.css";
import { projectsData } from "../../../data/ProjectsData";
import deviconMap from "../../../data/DevIconsMap";

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
        <span className={styles.label}></span>
        <div className={styles.techList}>
          {project.technologies.map((tech) => {
            const iconClass = deviconMap[tech] || "default-icon-class";
            return (
              <div key={tech} className={styles.techItem}>
                <i className={iconClass}></i>
                <span>{tech}</span>
              </div>
            );
          })}
        </div>
      </div>

      {(project.github || project.deploy) && (
        <div className={styles.linksWrapper}>
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <i className="devicon-github-original"></i> GitHub
            </a>
          )}
          {project.deploy && (
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.linkButton}
            >
              <i className="fas fa-link"></i> Look online
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
