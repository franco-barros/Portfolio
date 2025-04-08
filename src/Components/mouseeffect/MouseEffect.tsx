"use client";
import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; // 👈 Import necesario
import styles from "../../styles/MouseEffect.module.css";

interface MouseEffectProps {
  className?: string;
  children?: React.ReactNode;
}

const MouseEffect: React.FC<MouseEffectProps> = ({ children, className }) => {
  const [mounted, setMounted] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const [docHeight, setDocHeight] = useState<number>(0);
  const [isMobile, setIsMobile] = useState(false);

  const pathname = usePathname(); // 👈 Hook para detectar ruta

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname === "/") {
      // 👇 Reiniciamos valores al volver a home
      setMousePos({ x: window.innerWidth / 2, y: window.innerHeight / 2 });
      setScrollPos(window.scrollY);
    }
  }, [pathname]);

  useEffect(() => {
    const updateDimensions = () => {
      requestAnimationFrame(() => {
        const calculatedHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        setDocHeight(
          calculatedHeight > 0 ? calculatedHeight : window.innerHeight
        );
        setIsMobile(window.innerWidth <= 768);
      });
    };

    const handleScroll = () => setScrollPos(window.scrollY);
    const handleMouseMove = (e: MouseEvent) =>
      setMousePos({ x: e.clientX, y: e.clientY });

    updateDimensions();
    window.addEventListener("load", updateDimensions);
    window.addEventListener("resize", updateDimensions);
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("load", updateDimensions);
      window.removeEventListener("resize", updateDimensions);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  if (!mounted) {
    return null;
  }

  const effectiveDocHeight =
    docHeight || (typeof window !== "undefined" ? window.innerHeight : 0);

  const firstThird = effectiveDocHeight / 3;
  const secondThird = (2 * effectiveDocHeight) / 3;

  let chosenColor = "";
  if (scrollPos < firstThird) {
    chosenColor = "var(--mouse-effect-color1)";
  } else if (scrollPos < secondThird) {
    chosenColor = "var(--mouse-effect-color2)";
  } else {
    chosenColor = "var(--mouse-effect-color3)";
  }

  return (
    <div className={`${styles.container} ${className ?? ""}`}>
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
          {[
            { key: 1, class: styles.sphereOne, x: 14.14, y: 14.14 },
            { key: 2, class: styles.sphereTwo, x: -14.14, y: 14.14 },
            { key: 3, class: styles.sphereThree, x: -14.14, y: -14.14 },
            { key: 4, class: styles.sphereFour, x: 14.14, y: -14.14 },
          ].map(({ key, class: sphereClass, x, y }) => (
            <div
              key={key}
              className={`${styles.sphere} ${sphereClass}`}
              style={{
                background: `radial-gradient(circle at center, ${chosenColor} 0%, transparent 70%)`,
                transform: `translate(${x}vw, ${y}vw)`,
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
