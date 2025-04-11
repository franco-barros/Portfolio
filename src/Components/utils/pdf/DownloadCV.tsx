"use client";
import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import styles from "../../../styles/utils/DownloadCV.module.css";
import { FaDownload } from "react-icons/fa";

const DownloadCV: React.FC = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 480);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let direction = 1;
  let offset = 0;

  useAnimationFrame((t, delta) => {
    offset += (delta / 1000) * 10 * direction;
    if (offset >= 20) direction = -1;
    if (offset <= 0) direction = 1;

    if (isMobile) {
      x.set(0);
      y.set(0);
    } else {
      y.set(-offset);
      x.set(0);
    }
  });

  return (
    <motion.div
      style={{
        // En mobile usamos posición estática para respetar el tamaño y que se rompa la animacion
        position: isMobile ? "static" : "absolute",
        width: "100%",
        height: "100%",
        top: isMobile ? "0" : "20px",
        left: 0,
        x,
        y,
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
