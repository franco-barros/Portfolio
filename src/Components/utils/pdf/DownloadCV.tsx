"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../../../styles/utils/DownloadCV.module.css";
import { FaDownload } from "react-icons/fa";

const DownloadCV: React.FC = () => {
  const verticalControls = useAnimation();

  useEffect(() => {
    verticalControls.start({
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    });
  }, [verticalControls]);

  const handleMouseEnter = () => {
    verticalControls.stop();
  };

  const handleMouseLeave = () => {
    verticalControls.start({
      y: [0, -20, 0],
      transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
    });
  };

  return (
    <motion.div
      animate={verticalControls}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "20px", // mismo offset que la esfera
        left: 0,
      }}
    >
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
    </motion.div>
  );
};

export default DownloadCV;
