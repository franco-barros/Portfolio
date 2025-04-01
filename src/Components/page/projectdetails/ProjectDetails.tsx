import styles from "../../../styles/page/ProjectsDetail.module.css";

interface ProjectDetailsProps {
  projectsId: string;
}

// Definimos el tipo para garantizar que TypeScript entienda la estructura de los proyectos
const projectInfo: Record<
  string,
  { title: string; description: string; technologies: string[] }
> = {
  "market-multiverse": {
    title: "Market Multiverse",
    description:
      "Un mercado en línea con un diseño inmersivo y una experiencia de usuario fluida.",
    technologies: ["React", "CSS Modules", "Next.js"],
  },
  listify: {
    title: "Listify",
    description:
      "Una aplicación para crear y administrar listas de tareas de manera eficiente.",
    technologies: ["React", "CSS Modules", "JavaScript"],
  },
  taskflow: {
    title: "TaskFlow",
    description:
      "Un gestor de tareas avanzado con sincronización en tiempo real.",
    technologies: ["React", "Redux", "Firebase"],
  },
  devconnect: {
    title: "DevConnect",
    description:
      "Una plataforma social para desarrolladores donde pueden compartir conocimientos.",
    technologies: ["Java", "Node.js", "MongoDB"],
  },
  cryptostats: {
    title: "CryptoStats",
    description:
      "Una herramienta para visualizar y analizar datos del mercado de criptomonedas.",
    technologies: ["Java", "Spring Boot", "Node.js"],
  },
  weathernow: {
    title: "WeatherNow",
    description:
      "Una aplicación que proporciona información meteorológica en tiempo real.",
    technologies: ["Express", "Nest.js", "OpenWeather API"],
  },
};

const ProjectDetails: React.FC<ProjectDetailsProps> = ({ projectsId }) => {
  const project = projectInfo[projectsId];

  if (!project) {
    return <p className={styles.notFound}>Proyecto no encontrado.</p>;
  }

  return (
    <div className={styles.detailsContainer}>
      <h1 className={styles.title}>{project.title}</h1>
      <p className={styles.description}>{project.description}</p>
      <div className={styles.technologies}>
        <span className={styles.label}>Tecnologías:</span>
        <span className={styles.techList}>
          {project.technologies.join(", ")}
        </span>
      </div>
    </div>
  );
};

export default ProjectDetails;
