"use client";
import React from "react";
import styles from "../../../styles/utils/DownloadCV.module.css";
import { FaDownload } from "react-icons/fa";

const DownloadCV: React.FC = () => {
  return (
    <div className={styles.cvContainer}>
      <a
        href="/pdf/Curriculum.pdf"
        download="Franco-Barros-CV.pdf"
        className={styles.downloadButton}
      >
        <FaDownload className={styles.icon} />
        Download Resume
      </a>
    </div>
  );
};

export default DownloadCV;
