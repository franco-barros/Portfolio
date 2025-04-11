import { notFound } from "next/navigation";
import BackButton from "../../../Components/page/backbutton";
import ProjectDetails from "../../../Components/page/projectdetails/ProjectDetails";
import ImageGallery from "../../../Components/page/imagegallery/ImageGallery";
import { projectsData } from "../../../data/Project/ProjectsData";
import styles from "../../../styles/page/ProjectsPage.module.css";

type PageProps = Readonly<{
  params: Promise<{
    projectsId: string;
  }>;
}>;

export default async function ProjectPage({ params }: PageProps) {
  const { projectsId } = await params;
  const project = projectsData[projectsId];

  if (!project) notFound();

  return (
    <div>
      <BackButton />
      <div className={styles.pageContainer}>
        <div className={styles.projectCard}>
          <div className={styles.headerContainer}>
            <h1 className={styles.pageTitle}>{project.title}</h1>
          </div>
          <div className={styles.detailsSection}>
            <ProjectDetails projectsId={projectsId} showTitle={false} />
          </div>
          <div className={styles.gallerySection}>
            <ImageGallery images={project.images} video={project.video} />
          </div>
        </div>
      </div>
    </div>
  );
}
