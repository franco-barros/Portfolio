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
    // Solo se ejecuta en el cliente
    const updateDimensions = () => {
      setDocHeight(document.documentElement.scrollHeight - window.innerHeight);
      setIsMobile(window.innerWidth <= 768);
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
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (docHeight === 0) return null;

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
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className={`${styles.sphere} ${styles[`sphere${n}`]}`}
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
