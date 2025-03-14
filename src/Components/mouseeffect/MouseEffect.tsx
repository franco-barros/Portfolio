"use client";
import React, { useState, useEffect } from "react";

interface MouseEffectProps {
  className?: string;
  children?: React.ReactNode;
}

const MouseEffect: React.FC<MouseEffectProps> = ({ children, className }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Usamos clientX y clientY para obtener las coordenadas en el viewport
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Fondo interactivo que se posiciona según el cursor en el viewport */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(206, 10, 10, 0.62), transparent 25%)`,
          zIndex: 10,
        }}
      />
      {children}
    </div>
  );
};

export default MouseEffect;
