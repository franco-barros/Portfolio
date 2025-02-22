"use client";

import React, { useState } from "react";
import styles from "../../styles/AnimatedMenuOverlay.module.css";

interface AnimatedMenuOverlayProps {
  onClose: () => void;
  scrollToSection: (id: string) => void;
}

const AnimatedMenuOverlay: React.FC<AnimatedMenuOverlayProps> = ({
  onClose,
  scrollToSection,
}) => {
  const [animate, setAnimate] = useState(true);

  const handleClose = () => {
    setAnimate(false);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div className={styles.menuOverlayContainer}>
      <div
        className={`${styles.animatedMenu} ${
          animate ? styles.open : styles.closing
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Cerrar menú"
        >
          &times;
        </button>
        <button
          onClick={() => {
            scrollToSection("home");
            handleClose();
          }}
          className={styles.menuItem}
        >
          Home
        </button>
        <button
          onClick={() => {
            scrollToSection("about");
            handleClose();
          }}
          className={styles.menuItem}
        >
          About me
        </button>
        <button
          onClick={() => {
            scrollToSection("footer");
            handleClose();
          }}
          className={styles.menuItem}
        >
          Contact
        </button>
      </div>
    </div>
  );
};

export default AnimatedMenuOverlay;
