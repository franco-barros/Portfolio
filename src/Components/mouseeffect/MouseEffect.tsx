"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/MouseEffect.module.css";

interface MouseEffectProps {
  className?: string;
  children?: React.ReactNode;
}

const MouseEffect: React.FC<MouseEffectProps> = ({ children, className }) => {
  const [mousePos, setMousePos] = useState({
    x: window.innerWidth / 2,
    y: window.innerHeight / 2,
  });
  const [scrollPos, setScrollPos] = useState(0);
  const [docHeight, setDocHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Set dimensiones y tipo de dispositivo al inicio y cuando resize
  useEffect(() => {
    const updateLayout = () => {
      setDocHeight(document.documentElement.scrollHeight - window.innerHeight);
      setIsMobile(window.innerWidth <= 768);
    };

    updateLayout(); // llamada inicial
    window.addEventListener("resize", updateLayout);

    return () => window.removeEventListener("resize", updateLayout);
  }, []);

  // Scroll + mousemove handlers
  useEffect(() => {
    const handleScroll = () => setScrollPos(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove);
    }

    // Forzar una posición inicial para evitar visual vacío
    setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMobile]);

  if (docHeight === 0) return null;

  // Selección del color según scroll
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
      {!isMobile && (
        <div
          className={styles.desktopEffect}
          style={{
            background: `radial-gradient(circle 50vw at ${mousePos.x}px ${mousePos.y}px, ${chosenColor} 0%, transparent 75%)`,
          }}
        />
      )}

      {isMobile && (
        <div className={styles.sphereContainer}>
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className={`${styles.sphere} ${styles[`sphere${i}`]}`}
              style={{
                background: `radial-gradient(circle at center, ${chosenColor} 0%, transparent 70%)`,
              }}
            />
          ))}
        </div>
      )}

      {children}
    </div>
  );
};

export default MouseEffect;
