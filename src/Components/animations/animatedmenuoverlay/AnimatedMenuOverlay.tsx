"use client";
import React, { useState } from "react";
import { createPortal } from "react-dom";
import styles from "../../../styles/animations/AnimatedMenuOverlay.module.css";

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

  const overlayContent = (
    <div className={styles.menuOverlayContainer}>
      <div
        className={`${styles.animatedMenu} ${
          animate ? styles.open : styles.closing
        }`}
      >
        <button
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Close menu"
        >
          &times;
        </button>

        {/* Container for menu buttons */}
        <div className={styles.menuItemsContainer}>
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
            About Me
          </button>
          <button
            onClick={() => {
              scrollToSection("projects");
              handleClose();
            }}
            className={styles.menuItem}
          >
            Projects
          </button>
          <button
            onClick={() => {
              scrollToSection("apps");
              handleClose();
            }}
            className={styles.menuItem}
          >
            Completed Apps
          </button>
          <button
            onClick={() => {
              scrollToSection("skills");
              handleClose();
            }}
            className={styles.menuItem}
          >
            Tools
          </button>
          <button
            onClick={() => {
              scrollToSection("collaborators");
              handleClose();
            }}
            className={styles.menuItem}
          >
            Collaborators
          </button>
          <button
            onClick={() => {
              scrollToSection("service");
              handleClose();
            }}
            className={styles.menuItem}
          >
            Service
          </button>
          <button
            onClick={() => {
              scrollToSection("contactme");
              handleClose();
            }}
            className={styles.menuItem}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(overlayContent, document.body);
};

export default AnimatedMenuOverlay;
