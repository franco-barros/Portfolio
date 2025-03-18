"use client";
import React from "react";
import { motion } from "framer-motion";

const AnimatedSquares: React.FC = () => {
  return (
    <div
      style={{
        width: "400px",
        height: "400px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.svg width="200" height="200" viewBox="0 0 200 200">
        {/* Cuadro exterior - azul */}
        <motion.path
          d="M10,10 H190 V190 H10 Z"
          fill="none"
          stroke="#2563eb"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
          }}
        />
        {/* Cuadro intermedio - rojo */}
        <motion.path
          d="M30,30 H170 V170 H30 Z"
          fill="none"
          stroke="#e11d48"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 0.5,
          }}
        />
        {/* Cuadro interior - verde */}
        <motion.path
          d="M50,50 H150 V150 H50 Z"
          fill="none"
          stroke="#10b981"
          strokeWidth="4"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2.5,
            ease: "easeInOut",
            repeat: Infinity,
            repeatType: "loop",
            delay: 1,
          }}
        />
      </motion.svg>
    </div>
  );
};

export default React.memo(AnimatedSquares);
