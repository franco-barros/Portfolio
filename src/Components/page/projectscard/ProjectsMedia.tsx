"use client";
import React, { useState } from "react";
import Image from "next/image";
import ImageModal from "../projectscard/ImageModal";
import styles from "../../../styles/page/projectscard/ProjectMedia.module.css";

interface ProjectMediaProps {
  projectsId: string;
  images: string[];
  video?: string;
  subtitle?: string;
}

const ProjectMedia: React.FC<ProjectMediaProps> = ({
  projectsId,
  images,
  video,
  subtitle,
}) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <div className={styles.mediaContainer}>
      <div className={styles.images}>
        {images.map((imgName, index) => {
          const imagePath = `/assets/images/${imgName}`;
          return (
            <Image
              key={index}
              src={imagePath}
              alt={`${projectsId} image ${index + 1}`}
              width={300}
              height={200}
              className={styles.image}
              onClick={() => setSelectedImage(imagePath)}
            />
          );
        })}
      </div>

      {video && (
        <video className={styles.video} controls>
          <source src={`/assets/videos/${video}`} type="video/mp4" />
          {subtitle && (
            <track
              src={`/assets/subtitles/${subtitle}`}
              kind="captions"
              srcLang="en"
              label="English Captions"
            />
          )}
          Your browser does not support the video tag.
        </video>
      )}

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Expanded Image"
          onClose={() => setSelectedImage(null)}
        />
      )}
    </div>
  );
};

export default ProjectMedia;
