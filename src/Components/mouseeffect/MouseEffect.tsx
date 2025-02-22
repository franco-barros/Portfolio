"use client";
import React, { useState } from "react";

interface MouseEffectProps {
  children: React.ReactNode;
}

const MouseEffect: React.FC<MouseEffectProps> = ({ children }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Fondo interactivo */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
          background: `radial-gradient(circle at ${mousePos.x}px ${mousePos.y}px, rgba(59,130,246,0.3), transparent 25%)`,
          zIndex: 0,
        }}
      />
      <div style={{ position: "relative", zIndex: 1 }}>{children}</div>
    </div>
  );
};

export default MouseEffect;
