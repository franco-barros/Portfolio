"use client";
import React, { useEffect, useRef, useState } from "react";

const TesseractAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Detectar ancho de pantalla
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768); // breakpoint a gusto
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    canvas.width = 400;
    canvas.height = 400;

    let angle = 0;

    const vertices4D = [
      [-1, -1, -1, -1],
      [-1, -1, -1, 1],
      [-1, -1, 1, -1],
      [-1, -1, 1, 1],
      [-1, 1, -1, -1],
      [-1, 1, -1, 1],
      [-1, 1, 1, -1],
      [-1, 1, 1, 1],
      [1, -1, -1, -1],
      [1, -1, -1, 1],
      [1, -1, 1, -1],
      [1, -1, 1, 1],
      [1, 1, -1, -1],
      [1, 1, -1, 1],
      [1, 1, 1, -1],
      [1, 1, 1, 1],
    ];

    function rotate4D([x, y, z, w]: number[], a: number): number[] {
      const sin = Math.sin(a);
      const cos = Math.cos(a);

      // Rotación en plano ZW
      const zw = [z * cos - w * sin, z * sin + w * cos];
      // Rotación en plano XW
      const xw = [x * cos - w * sin, x * sin + w * cos];

      return [xw[0], y, zw[0], zw[1]];
    }

    function project([x, y, w]: number[]): [number, number] {
      const scale = 200 / (4 - w); // Proyección perspectiva 4D→3D→2D
      return [x * scale + 200, y * scale + 200]; // Centrado
    }

    let animationFrameId: number;

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const points2D = vertices4D.map((v) => project(rotate4D(v, angle)));

      for (let i = 0; i < 16; i++) {
        for (let j = i + 1; j < 16; j++) {
          const diff = i ^ j;
          if (diff && (diff & (diff - 1)) === 0) {
            const [x1, y1] = points2D[i];
            const [x2, y2] = points2D[j];
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = "#00acc1";
            ctx.stroke();
          }
        }
      }

      if (isDesktop) {
        angle += 0.01;
      }

      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isDesktop]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "auto",
        maxWidth: 400,
        display: "block",
        margin: "2rem auto",
        borderRadius: 12,
        background: "#0d1b2a",
      }}
    />
  );
};

export default TesseractAnimation;
