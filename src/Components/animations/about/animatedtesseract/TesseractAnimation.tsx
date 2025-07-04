"use client";
import React, { useEffect, useRef, useState } from "react";

const TesseractAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    // Tamaños variables según dispositivo
    const size = isDesktop ? 400 : 280;
    canvas.width = size;
    canvas.height = size;

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
      const zw = [z * cos - w * sin, z * sin + w * cos];
      const xw = [x * cos - w * sin, x * sin + w * cos];
      return [xw[0], y, zw[0], zw[1]];
    }

    // Ajustar escala para que encaje bien en canvas pequeño o grande
    function project([x, y, w]: number[]): [number, number] {
      // base scale 200 para 400px, 140 para 280px (aprox proporcional)
      const baseScale = isDesktop ? 200 : 140;
      const scale = baseScale / (4 - w);
      const center = size / 2;
      return [x * scale + center, y * scale + center];
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

      angle += 0.01;
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
        maxWidth: isDesktop ? 400 : 280,
        display: "block",
        margin: "2rem auto",
        borderRadius: 12,
        background: "#0d1b2a",
      }}
    />
  );
};

export default TesseractAnimation;
