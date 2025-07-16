"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const createStarPoints = (
  cx: number,
  cy: number,
  outerRadius: number,
  innerRadius: number,
  points: number
) => {
  const angleStep = (Math.PI * 2) / points;
  let path = "";
  for (let i = 0; i < points; i++) {
    const r = i % 2 === 0 ? outerRadius : innerRadius;
    const angle = i * angleStep - Math.PI / 2; // start at top
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    path += `${x},${y} `;
  }
  return path.trim();
};

const CaptainShieldAnimation: React.FC = () => {
  const [wakandaMode, setWakandaMode] = useState(false);

  const starPoints = createStarPoints(100, 100, 35, 15, 10);

  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        aspectRatio: "1 / 1",
        margin: "2rem auto",
        borderRadius: 12,
        background: "rgba(13, 27, 42, 0.7)", // fondo azul oscuro con transparencia
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 20,
        boxSizing: "border-box",
        maxHeight: "90vw",
      }}
    >
      <button
        type="button"
        onClick={() => setWakandaMode(!wakandaMode)}
        aria-pressed={wakandaMode}
        style={{
          width: "100%",
          height: "100%",
          background: "transparent",
          border: "none",
          cursor: "pointer",
          padding: 0,
        }}
      >
        <motion.svg
          viewBox="0 0 200 200"
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid meet"
          style={{ display: "block" }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        >
          <defs>
            <radialGradient id="redGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ff4c4c" />
              <stop offset="100%" stopColor="#7a0000" />
            </radialGradient>
            <radialGradient id="blueGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#5a9fff" />
              <stop offset="100%" stopColor="#002f6c" />
            </radialGradient>
            <radialGradient id="whiteGradient" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="100%" stopColor="#cccccc" />
            </radialGradient>

            <filter
              id="starShadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
            >
              <feDropShadow
                dx="0"
                dy="0"
                stdDeviation="2"
                floodColor="#000"
                floodOpacity="0.5"
              />
            </filter>
          </defs>

          {/* Círculo externo rojo fijo */}
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="url(#redGradient)"
            stroke="#330000"
            strokeWidth="3"
          />

          {/* Anillo blanco */}
          <circle
            cx="100"
            cy="100"
            r="80"
            fill="url(#whiteGradient)"
            stroke="#888"
            strokeWidth="1.5"
          />

          {/* Anillo rojo fijo */}
          <circle
            cx="100"
            cy="100"
            r="65"
            fill="url(#redGradient)"
            stroke="#660000"
            strokeWidth="1.5"
          />

          {/* Anillo blanco interior */}
          <circle
            cx="100"
            cy="100"
            r="50"
            fill="url(#whiteGradient)"
            stroke="#888"
            strokeWidth="1.5"
          />

          {/* Círculo azul central */}
          <circle
            cx="100"
            cy="100"
            r="40"
            fill="#003399"
            stroke="#001844"
            strokeWidth="2"
          />

          {/* Estrella blanca con pulso exagerado al hacer click */}
          <motion.polygon
            points={starPoints}
            fill="white"
            stroke="#ccc"
            strokeWidth="1.5"
            filter="url(#starShadow)"
            animate={
              wakandaMode
                ? {
                    scale: [1, 1.5, 1.2, 1.5, 1],
                    rotate: [0, 20, -15, 20, 0],
                  }
                : { scale: 1, rotate: 0 }
            }
            transition={
              wakandaMode
                ? { duration: 1.5, ease: "easeInOut" }
                : { duration: 0.5 }
            }
            style={{ originX: "50%", originY: "50%" }}
          />
        </motion.svg>
      </button>
    </div>
  );
};

export default CaptainShieldAnimation;
