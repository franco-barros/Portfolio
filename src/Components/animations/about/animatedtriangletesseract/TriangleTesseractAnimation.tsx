"use client";
import React from "react";
import { motion } from "framer-motion";

const TriangleTesseractAnimation: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        aspectRatio: "1 / 1",
        margin: "2rem auto",
        borderRadius: 12,
        background: "#0d1b2a", // mismo fondo
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      title="Triángulos en rotación"
    >
      <svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        style={{ display: "block" }}
      >
        {/* Triángulo externo girando en sentido horario */}
        <motion.polygon
          points="100,20 180,180 20,180"
          fill="none"
          stroke="#00bcd4"
          strokeWidth={2}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        />

        {/* Triángulo medio girando en sentido antihorario */}
        <motion.polygon
          points="100,40 160,160 40,160"
          fill="none"
          stroke="#4dd0e1"
          strokeWidth={2}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{ transformOrigin: "50% 50%" }}
        />

        {/* Triángulo interno pulsando */}
        <motion.polygon
          points="100,60 140,140 60,140"
          fill="#b2ebf2"
          stroke="#00bcd4"
          strokeWidth={1}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ transformOrigin: "50% 50%" }}
        />
      </svg>
    </div>
  );
};

export default TriangleTesseractAnimation;
