import { notFound } from "next/navigation";
import ProjectCard from "../../../Components/page/projectscard/ProjectsCard";
import ProjectDetails from "../../../Components/page/projectdetails/ProjectDetails";
import BackButton from "../../../Components/page/backbutton";
import { projectsData } from "../../../data/ProjectsData";
import styles from "../../../styles/page/ProjectsPage.module.css";

interface ProjectPageProps {
  readonly params: {
    readonly projectsId: string;
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { projectsId } = params;
  const project = projectsData[projectsId];

  if (!project) notFound();

  return (
    <div className={styles.pageContainer}>
      <BackButton />
      <div className={styles.headerContainer}>
        <h1 className={styles.pageTitle}>{project.title}</h1>
      </div>

      <ProjectCard
        projectsId={projectsId}
        images={project.images}
        video={project.video}
        subtitle={project.subtitle}
      />

      <ProjectDetails projectsId={projectsId} showTitle={false} />
    </div>
  );
}
