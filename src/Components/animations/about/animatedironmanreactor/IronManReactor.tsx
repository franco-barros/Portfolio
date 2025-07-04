"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const IronManReactor: React.FC = () => {
  const [pulse, setPulse] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setPulse((prev) => !prev);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const r = 48;
  const cx = 50;
  const cy = 50;

  const polarToCartesian = (
    centerX: number,
    centerY: number,
    radius: number,
    angleDegrees: number
  ) => {
    const angleRad = (angleDegrees * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(angleRad),
      y: centerY + radius * Math.sin(angleRad),
    };
  };

  const interpolatePoint = (
    p1: { x: number; y: number },
    p2: { x: number; y: number },
    t: number
  ) => ({
    x: p1.x + (p2.x - p1.x) * t,
    y: p1.y + (p2.y - p1.y) * t,
  });

  const triangleAngles = [90, 210, 330];
  const triangleVertices = triangleAngles.map((angle) =>
    polarToCartesian(cx, cy, r, angle)
  );

  const edgeAngles = [130, 170, 250, 290, 10, 50];
  const outerPoints = edgeAngles.map((angle) =>
    polarToCartesian(cx, cy, r, angle)
  );

  const sidePoints = [
    interpolatePoint(triangleVertices[0], triangleVertices[1], 0.33),
    interpolatePoint(triangleVertices[0], triangleVertices[1], 0.66),
    interpolatePoint(triangleVertices[1], triangleVertices[2], 0.33),
    interpolatePoint(triangleVertices[1], triangleVertices[2], 0.66),
    interpolatePoint(triangleVertices[2], triangleVertices[0], 0.33),
    interpolatePoint(triangleVertices[2], triangleVertices[0], 0.66),
  ];

  const outerLines = outerPoints.map((outer, i) => ({
    outer,
    inner: sidePoints[i],
  }));

  // Hacemos el triángulo azul del centro más grande y un poco más bajo
  const triangleDownPoints = "30,38 50,68 70,38";

  const pointsToString = (points: { x: number; y: number }[]) =>
    points.map((p) => `${p.x.toFixed(2)},${p.y.toFixed(2)}`).join(" ");

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        aspectRatio: "1 / 1",
        margin: "2rem auto",
        borderRadius: 12,
        background: "#0d1b2a",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        boxSizing: "border-box",
      }}
      title="Reactor ARC estilo Iron Man 3"
    >
      <motion.svg
        viewBox="0 0 100 100"
        width="150"
        height="150"
        style={{ cursor: "pointer", overflow: "visible", display: "block" }}
      >
        <defs>
          <radialGradient id="blueGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00e5ff" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#004a64" stopOpacity="0.3" />
          </radialGradient>

          {/* Gris intermedio, menos metálico que antes */}
          <linearGradient id="softGrey" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#777" />
            <stop offset="100%" stopColor="#999" />
          </linearGradient>

          <filter id="glow" x="-40%" y="-40%" width="180%" height="180%">
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="3"
              floodColor="#00e5ff"
              floodOpacity="0.7"
            />
            <feDropShadow
              dx="0"
              dy="0"
              stdDeviation="6"
              floodColor="#00e5ff"
              floodOpacity="0.4"
            />
          </filter>
        </defs>

        {/* Círculo negro exterior (borde) */}
        <circle
          cx={cx}
          cy={cy}
          r={r + 3.5}
          fill="none"
          stroke="#000"
          strokeWidth="4"
        />

        {/* Círculo exterior con brillo */}
        <circle
          cx={cx}
          cy={cy}
          r={r}
          fill="url(#blueGlow)"
          stroke="#00b8d4"
          strokeWidth="3"
          filter="url(#glow)"
        />

        {/* Triángulo gris intermedio */}
        <polygon
          points={pointsToString(triangleVertices)}
          fill="none"
          stroke="url(#softGrey)"
          strokeWidth="3"
          style={{ filter: "drop-shadow(0 0 3px #444)" }}
        />

        {/* Líneas decorativas animadas con pulso */}
        {outerLines.map((line, i) => (
          <motion.line
            key={`outer-line-${i}`}
            x1={line.outer.x}
            y1={line.outer.y}
            x2={line.inner.x}
            y2={line.inner.y}
            stroke="url(#softGrey)"
            strokeWidth={3}
            animate={{
              filter: pulse
                ? "drop-shadow(0 0 8px #00e5ff)"
                : "drop-shadow(0 0 3px #00b8d4)",
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* Grupo central animado con pulso tipo escala */}
        <motion.g
          style={{ originX: "50%", originY: "50%" }}
          animate={{
            scale: pulse ? [1, 1.15, 1] : 1,
            filter: pulse
              ? "drop-shadow(0 0 15px #00e5ff) drop-shadow(0 0 30px #00b8d4)"
              : "drop-shadow(0 0 10px #00e5ff) drop-shadow(0 0 20px #00b8d4)",
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <motion.polygon
            points={triangleDownPoints}
            fill="#00e5ff"
            stroke="#00b8d4"
            strokeWidth="3"
            style={{ transformOrigin: "50% 50%" }}
          />
          <motion.circle
            cx={cx}
            cy={cy}
            r={5}
            fill="rgba(160, 216, 255, 0.3"
            filter="url(#glow)"
            animate={{ opacity: [0.8, 1, 0.8] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.g>
      </motion.svg>
    </div>
  );
};

export default IronManReactor;
