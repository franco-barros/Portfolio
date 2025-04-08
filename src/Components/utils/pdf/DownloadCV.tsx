"use client";
import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import styles from "../../../styles/utils/DownloadCV.module.css";
import { FaDownload } from "react-icons/fa";

const DownloadCV: React.FC = () => {
  const controls = useAnimation();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 480);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const startAnimation = () => {
    if (isMobile) {
      controls.start({
        x: [0, -20, 0],
        y: 0,
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      });
    } else {
      controls.start({
        y: [0, -20, 0],
        x: 0,
        transition: { duration: 4, repeat: Infinity, ease: "easeInOut" },
      });
    }
  };

  useEffect(() => {
    startAnimation();
  }, [isMobile]);

  const stopAnimation = () => {
    controls.stop();
  };

  return (
    <motion.div
      animate={controls}
      onMouseEnter={stopAnimation}
      onMouseLeave={startAnimation}
      onTouchStart={stopAnimation}
      onTouchEnd={startAnimation}
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        top: "20px",
        left: 0,
      }}
    >
      <div className={styles.cvContainer}>
        <a
          href="/pdf/Franco-Barros-CV(01).pdf"
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
