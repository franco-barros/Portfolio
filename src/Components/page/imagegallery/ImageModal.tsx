"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "../../../styles/page/imagegallery/ImageModal.module.css";

interface ImageModalProps {
  src: string;
  alt: string;
  onClose: () => void;
}

const ImageModal: React.FC<ImageModalProps> = ({ src, alt, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog && !dialog.open) {
      dialog.showModal();
    }

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
      dialog?.close();
    };
  }, [onClose]);

  return (
    <dialog ref={dialogRef} className={styles.modalDialog}>
      <button
        type="button"
        className={styles.modalBackdrop}
        onClick={onClose}
        aria-label="Cerrar modal haciendo clic fuera de la imagen"
      />
      <section className={styles.modalContent}>
        <Image
          src={src}
          alt={alt}
          className={styles.modalImage}
          width={800}
          height={600}
          priority
        />
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Cerrar imagen"
        >
          ✖
        </button>
      </section>
    </dialog>
  );
};

export default ImageModal;
