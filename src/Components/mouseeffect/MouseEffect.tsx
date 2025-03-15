"use client";
import React, { useState, useEffect } from "react";

interface MouseEffectProps {
  className?: string;
  children?: React.ReactNode;
}

const MouseEffect: React.FC<MouseEffectProps> = ({ children, className }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [windowHeight, setWindowHeight] = useState<number>(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWindowHeight(window.innerHeight);
    window.addEventListener("resize", handleResize);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Dividir la ventana en 3 partes iguales
  const firstThird = windowHeight / 3;
  const secondThird = (2 * windowHeight) / 3;

  let chosenColor = "";
  if (mousePos.y < firstThird) {
    chosenColor = "var(--mouse-effect-color1)";
  } else if (mousePos.y < secondThird) {
    chosenColor = "var(--mouse-effect-color2)";
  } else {
    chosenColor = "var(--mouse-effect-color3)";
  }

  return (
    <div
      className={className}
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Capa completa con radial gradient, de gran radio, que sigue al mouse */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          pointerEvents: "none",
          // Se usa un radio amplio (por ejemplo, 50vw) para que el efecto cubra gran parte de la pantalla
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
