import { notFound } from "next/navigation";
import ProjectCard from "../../../Components/page/projectscard/ProjectsCard";
import ProjectDetails from "../../../Components/page/projectdetails/ProjectDetails";
import BackButton from "../../../Components/page/backbutton";
import { projectsData } from "../../../data/Project/ProjectsData";
import styles from "../../../styles/page/ProjectsPage.module.css";

// Tipado correcto y compatible con SonarQube
type PageProps = {
  readonly params: {
    readonly projectsId: string;
  };
};

export default function ProjectPage({ params }: PageProps) {
  const project = projectsData[params.projectsId];

  if (!project) notFound();

  return (
    <div className={styles.pageContainer}>
      <BackButton />
      <div className={styles.headerContainer}>
        <h1 className={styles.pageTitle}>{project.title}</h1>
      </div>

      <ProjectCard
        projectsId={params.projectsId}
        images={project.images}
        video={project.video}
        subtitle={project.subtitle}
      />

      <ProjectDetails projectsId={params.projectsId} showTitle={false} />
    </div>
  );
}
