"use client";
import React, { useEffect, useRef, useState } from "react";

const TesseractAnimation: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);
  const [showAltShape, setShowAltShape] = useState(false);

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
    const size = isDesktop ? 400 : 280;
    canvas.width = size;
    canvas.height = size;

    let angle = 0;
    let animationFrameId: number;

    // ROTACION 4D COMPLETA (planos zw y xw)
    function rotate4DFull([x, y, z, w]: number[], a: number): number[] {
      const sin = Math.sin(a);
      const cos = Math.cos(a);
      const zw = [z * cos - w * sin, z * sin + w * cos];
      const xw = [x * cos - w * sin, x * sin + w * cos];
      return [xw[0], y, zw[0], zw[1]];
    }

    // ROTACION SOLO EN PLANO zw (para la segunda animación)
    function rotate4DPartial([x, y, z, w]: number[], a: number): number[] {
      const sin = Math.sin(a);
      const cos = Math.cos(a);
      const zw = [z * cos - w * sin, z * sin + w * cos];
      return [x, y, zw[0], zw[1]];
    }

    // PROYECCION 4D a 2D (x, y, w)
    function project([x, y, w]: number[]): [number, number] {
      const baseScale = isDesktop ? 200 : 140;
      const scale = baseScale / (4 - w);
      const center = size / 2;
      return [x * scale + center, y * scale + center];
    }

    // VERTICES CLASICOS 16 del tesseract
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

    // Dibuja el tesseract clásico con rotación 4D completa
    function drawTesseractFull() {
      ctx.clearRect(0, 0, size, size);
      // Fondo semitransparente
      ctx.fillStyle = "rgba(13, 27, 42, 0.7)";
      ctx.fillRect(0, 0, size, size);

      const points2D = vertices4D.map((v) => project(rotate4DFull(v, angle)));

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
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = "#00acc1";
      for (const [x, y] of points2D) {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    // Dibuja el tesseract con rotación parcial (solo plano zw)
    function drawTesseractPartial() {
      ctx.clearRect(0, 0, size, size);
      // Fondo semitransparente
      ctx.fillStyle = "rgba(13, 27, 42, 0.7)";
      ctx.fillRect(0, 0, size, size);

      const points2D = vertices4D.map((v) =>
        project(rotate4DPartial(v, angle))
      );

      for (let i = 0; i < 16; i++) {
        for (let j = i + 1; j < 16; j++) {
          const diff = i ^ j;
          if (diff && (diff & (diff - 1)) === 0) {
            const [x1, y1] = points2D[i];
            const [x2, y2] = points2D[j];
            ctx.beginPath();
            ctx.moveTo(x1, y1);
            ctx.lineTo(x2, y2);
            ctx.strokeStyle = "#ff6600"; // color naranja para la segunda animación
            ctx.lineWidth = 1.5;
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = "#ff6600";
      for (const [x, y] of points2D) {
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    // Función de animación principal
    function draw() {
      if (showAltShape) {
        drawTesseractPartial();
      } else {
        drawTesseractFull();
      }
      angle += 0.01;
      animationFrameId = requestAnimationFrame(draw);
    }

    draw();

    return () => cancelAnimationFrame(animationFrameId);
  }, [isDesktop, showAltShape]);

  return (
    <canvas
      ref={canvasRef}
      onClick={() => setShowAltShape((prev) => !prev)}
      style={{
        width: "100%",
        height: "auto",
        maxWidth: isDesktop ? 400 : 280,
        display: "block",
        margin: "2rem auto",
        borderRadius: 12,
        cursor: "pointer",
      }}
    />
  );
};

export default TesseractAnimation;
