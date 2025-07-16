"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const YinYangAnimation: React.FC = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    if (clicked) return; // evita múltiples clicks rápidos
    setClicked(true);
    setTimeout(() => setClicked(false), 400); // vuelve a círculo en 400ms
  };

  return (
    <button
      style={{
        width: "100%",
        maxWidth: 400,
        aspectRatio: "1 / 1",
        margin: "2rem auto",
        background: "rgba(13, 27, 42, 0.7)", // background semitransparente
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        cursor: "pointer",
        border: "none",
        outline: "none",
        padding: 0,
        transition: "border-radius 0.4s ease",
      }}
      onClick={handleClick}
      onFocus={(e) => (e.currentTarget.style.outline = "none")}
    >
      <motion.svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        animate={{
          rotate: 360,
          scale: [1, 1.05, 1],
        }}
        transition={{
          rotate: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      >
        <defs>
          <radialGradient id="yinYangGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#000" />
          </radialGradient>
        </defs>

        {/* Aquí reemplazamos el círculo por un rect con rx y ry animados */}
        <motion.rect
          x={10}
          y={10}
          width={175}
          height={175}
          fill="url(#yinYangGradient)"
          rx={clicked ? 0 : 90}
          ry={clicked ? 0 : 90}
          animate={{ rx: clicked ? 0 : 90, ry: clicked ? 0 : 90 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        />

        {/* Partes internas del yin-yang */}
        <path
          d="M100,10 A90,90 0 0,1 100,190 A45,45 0 0,0 100,10"
          fill="#fff"
        />
        <path
          d="M100,10 A90,90 0 0,0 100,190 A45,45 0 0,1 100,10"
          fill="#000"
        />

        {/* Bolas animadas */}
        <motion.circle
          cx="100"
          r={10}
          initial={{ cy: 55, fill: "#000", opacity: 0.4 }}
          animate={{
            cy: [55, 100, 145, 100, 55],
            fill: ["#000", "#000", "#000", "#7f8c8d", "#000"],
            opacity: [0.4, 0.2, 0.1, 0.2, 0.4],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
        <motion.circle
          cx="100"
          r={10}
          initial={{ cy: 145, fill: "#fff", opacity: 0.4 }}
          animate={{
            cy: [145, 100, 55, 100, 145],
            fill: ["#fff", "#fff", "#fff", "#7f8c8d", "#fff"],
            opacity: [0.4, 0.2, 0.1, 0.2, 0.4],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />

        <motion.circle
          cx="100"
          r={10}
          initial={{ cy: 55, fill: "#000" }}
          animate={{
            cy: [55, 100, 145, 100, 55],
            fill: ["#000", "#000", "#000", "#7f8c8d", "#000"],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
        <motion.circle
          cx="100"
          r={10}
          initial={{ cy: 145, fill: "#fff" }}
          animate={{
            cy: [145, 100, 55, 100, 145],
            fill: ["#fff", "#fff", "#fff", "#7f8c8d", "#fff"],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
            times: [0, 0.25, 0.5, 0.75, 1],
          }}
        />
      </motion.svg>
    </button>
  );
};

export default React.memo(YinYangAnimation);
