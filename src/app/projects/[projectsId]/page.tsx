import { notFound } from "next/navigation";
import ProjectCard from "../../../Components/page/projectscard";
import ProjectDetails from "../../../Components/page/projectdetails";
import styles from "../../../styles/page/ProjectsPage.module.css";

const projectData = [
  { projectsId: "market-multiverse" },
  { projectsId: "listify" },
  { projectsId: "taskflow" },
  { projectsId: "devconnect" },
  { projectsId: "cryptostats" },
  { projectsId: "weathernow" },
];

export default async function ProjectPage({
  params,
}: {
  params: { projectsId: string };
}) {
  const { projectsId } = params;
  const projectExists = projectData.some(
    (proj) => proj.projectsId === projectsId
  );

  if (!projectExists) notFound();

  return (
    <div className={styles.pageContainer}>
      <ProjectCard projectsId={projectsId} />
      <ProjectDetails projectsId={projectsId} />
    </div>
  );
}
