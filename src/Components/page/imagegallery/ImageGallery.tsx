"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import ImageModal from "./ImageModal";
import styles from "../../../styles/page/imagegallery/ImageGallery.module.css";
import useImageAutoPlay from "../../../hooks/page/imagegallery/useImageAutoPlay";
import usePauseOnHover from "../../../hooks/page/imagegallery/usePauseOnHover";

interface ImageGalleryProps {
  images: string[];
  video?: string;
}

const ImageGallery: React.FC<ImageGalleryProps> = ({ images, video }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isVideoActive, setIsVideoActive] = useState(false);

  const mainImageRef = useRef<HTMLButtonElement>(null);
  const thumbnailsRef = useRef<HTMLDivElement>(null);

  const isPaused = usePauseOnHover(thumbnailsRef);

  useImageAutoPlay({
    imagesLength: images.length,
    isVideoActive,
    isPaused,
    setCurrentIndex,
    delay: 5000,
  });

  const handleThumbnailClick = (index: number) => {
    setCurrentIndex(index);
    setIsVideoActive(false);
  };

  const openModal = (src: string) => setSelectedImage(src);
  const closeModal = () => setSelectedImage(null);
  const handleVideoActivate = () => setIsVideoActive(true);

  return (
    <div className={styles.galleryContainer}>
      <div className={styles.mainDisplay}>
        {video && isVideoActive ? (
          <video
            controls
            className={styles.mainMedia}
            style={{ width: "100%", height: "100%" }}
          >
            <source src={video} type="video/mp4" />
            <track
              kind="captions"
              src="/captions/default.vtt"
              label="Subtítulos"
              default
            />
            Tu navegador no soporta la reproducción de videos.
          </video>
        ) : (
          <button
            ref={mainImageRef}
            type="button"
            className={styles.mainMediaButton}
            onClick={() => openModal(images[currentIndex])}
            style={{ cursor: "pointer" }}
          >
            <Image
              src={images[currentIndex]}
              alt={`Imagen ${currentIndex + 1}`}
              fill
              className={styles.mainMedia}
              priority
            />
          </button>
        )}
      </div>

      <div className={styles.thumbnailRow} ref={thumbnailsRef}>
        {images.map((src) => (
          <button
            key={src}
            type="button"
            className={`${styles.thumbnailItem} ${
              src === images[currentIndex] ? styles.active : ""
            }`}
            onClick={() => handleThumbnailClick(images.indexOf(src))}
            aria-label={`Mostrar imagen ${images.indexOf(src) + 1}`}
          >
            <Image
              src={src}
              alt={`Thumbnail ${images.indexOf(src) + 1}`}
              width={100}
              height={66}
              className={styles.thumbnailImage}
            />
          </button>
        ))}

        {video && (
          <button
            type="button"
            className={styles.thumbnailItem}
            onClick={handleVideoActivate}
            aria-label="Reproducir video"
          >
            <div className={styles.videoThumbnail}>
              <span className={styles.playIcon}>►</span>
              <span className={styles.playText}>Video</span>
            </div>
          </button>
        )}
      </div>

      {selectedImage && (
        <ImageModal
          src={selectedImage}
          alt="Vista ampliada"
          onClose={closeModal}
        />
      )}
    </div>
  );
};

export default ImageGallery;
