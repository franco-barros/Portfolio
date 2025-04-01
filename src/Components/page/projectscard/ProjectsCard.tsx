import Image from "next/image";
import styles from "../../../styles/page/ProjectCard.module.css";

interface ProjectCardProps {
  projectsId: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ projectsId }) => {
  const imagePath = `/assets/images/${projectsId}.png`;
  const videoPath = `/assets/videos/${projectsId}.mp4`;

  return (
    <div className={styles.card}>
      <Image
        src={imagePath}
        alt={projectsId}
        width={600}
        height={400}
        className={styles.image}
      />
      <video className={styles.video} controls>
        <source src={videoPath} type="video/mp4" />
        <track
          src={`/assets/subtitles/${projectsId}.vtt`}
          kind="captions"
          srcLang="en"
          label="English Captions"
          default
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default ProjectCard;
