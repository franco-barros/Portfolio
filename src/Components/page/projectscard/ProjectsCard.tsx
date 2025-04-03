import React from "react";
import ProjectMedia from "./ProjectsMedia";
import styles from "../../../styles/page/projectscard/ProjectCard.module.css";

interface ProjectCardProps {
  projectsId: string;
  images: string[];
  video?: string;
  subtitle?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectsId,
  images,
  video,
  subtitle,
}) => {
  return (
    <div className={styles.card}>
      {images.length > 0 ? (
        <ProjectMedia
          projectsId={projectsId}
          images={images}
          video={video}
          subtitle={subtitle}
        />
      ) : (
        <p className={styles.noMedia}>No hay imágenes disponibles.</p>
      )}

      {/* Aquí se puede agregar otros elementos de la tarjeta, como título y descripción */}
      <div className={styles.cardDetails}></div>
    </div>
  );
};

export default ProjectCard;
