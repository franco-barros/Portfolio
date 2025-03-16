"use client";
import React from "react";
import styles from "../../styles/DownloadCV.module.css";
import { FaDownload } from "react-icons/fa"; // Ícono de descarga

const DownloadCV: React.FC = () => {
  return (
    <div className={styles.cvContainer}>
      <a
        href="/cv.pdf"
        download="Mi_Curriculum.pdf"
        className={styles.downloadButton}
      >
        <FaDownload className={styles.icon} />
        Descargar CV
      </a>
    </div>
  );
};

export default DownloadCV;
