"use client";
import React, { useState, useEffect } from "react";

interface MouseEffectProps {
  className?: string;
  children?: React.ReactNode;
}

const MouseEffect: React.FC<MouseEffectProps> = ({ children, className }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollPos, setScrollPos] = useState(0);
  const [docHeight, setDocHeight] = useState<number>(0);

  useEffect(() => {
    const updateDimensions = () => {
      setDocHeight(document.documentElement.scrollHeight - window.innerHeight);
    };

    const handleScroll = () => {
      setScrollPos(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    // Obtener la altura del documento al cargar
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

  if (docHeight === 0) return null; // Evita errores de renderizado temprano

  // Dividimos la página en tres secciones basadas en la altura total
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
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Capa de gradiente que sigue el mouse pero cambia según el scroll */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          background: `radial-gradient(circle 50vw at ${mousePos.x}px ${mousePos.y}px, ${chosenColor} 0%, transparent 75%)`,
          zIndex: 10,
          transition: "background-color 0.3s ease",
        }}
      />
      {children}
    </div>
  );
};

export default MouseEffect;
