"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/MouseEffect.module.css";

interface MouseEffectProps {
  className?: string;
  children?: React.ReactNode;
}

const MouseEffect: React.FC<MouseEffectProps> = ({ children, className }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const [docHeight, setDocHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const updateDimensions = () => {
      setDocHeight(document.documentElement.scrollHeight - window.innerHeight);
      setIsMobile(window.innerWidth <= 768); // Umbral para mobile
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", handleScroll);
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  if (docHeight === 0) return null; // Evita renderizados tempranos

  // Dividir la página en tres secciones para elegir el color
  const firstThird = docHeight / 3;
  const secondThird = (2 * docHeight) / 3;
  let chosenColor = "";
  if (scrollPos < firstThird) {
    chosenColor = "var(--mouse-effect-color1)";
  } else if (scrollPos < secondThird) {
    chosenColor = "var(--mouse-effect-color2)";
  } else {
    chosenColor = "var(--mouse-effect-color3)";
  }

  return (
    <div className={`${styles.container} ${className || ""}`}>
      {/* Versión desktop: capa que sigue al mouse */}
      {!isMobile && (
        <div
          className={styles.desktopEffect}
          style={{
            background: `radial-gradient(circle 50vw at ${mousePos.x}px ${mousePos.y}px, ${chosenColor} 0%, transparent 75%)`,
          }}
        />
      )}

      {/* Versión mobile: contenedor con 4 esferas animadas */}
      {isMobile && (
        <div className={styles.sphereContainer}>
          <div
            className={`${styles.sphere} ${styles.sphereOne}`}
            style={{
              background: `radial-gradient(circle at center, ${chosenColor} 0%, transparent 70%)`,
            }}
          />
          <div
            className={`${styles.sphere} ${styles.sphereTwo}`}
            style={{
              background: `radial-gradient(circle at center, ${chosenColor} 0%, transparent 70%)`,
            }}
          />
          <div
            className={`${styles.sphere} ${styles.sphereThree}`}
            style={{
              background: `radial-gradient(circle at center, ${chosenColor} 0%, transparent 70%)`,
            }}
          />
          <div
            className={`${styles.sphere} ${styles.sphereFour}`}
            style={{
              background: `radial-gradient(circle at center, ${chosenColor} 0%, transparent 70%)`,
            }}
          />
        </div>
      )}

      {children}
    </div>
  );
};

export default MouseEffect;
