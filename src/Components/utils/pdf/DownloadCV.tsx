"use client";
import React from "react";
import styles from "../../../styles/utils/DownloadCV.module.css";
import { FaDownload } from "react-icons/fa"; 

const DownloadCV: React.FC = () => {
  return (
    <div className={styles.cvContainer}>
      <a
        href="/cv.pdf"
        download="My_Resume.pdf"
        className={styles.downloadButton}
      >
        <FaDownload className={styles.icon} />
        Download Resume
      </a>
    </div>
  );
};

export default DownloadCV;
