"use client";
import React from "react";
import { motion } from "framer-motion";

const YinYangAnimation: React.FC = () => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 400,
        aspectRatio: "1 / 1",
        margin: "2rem auto",
        background: "#0d1b2a",
        borderRadius: 12,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <motion.svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      >
        <defs>
          <radialGradient id="yinYangGradient" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#fff" />
            <stop offset="100%" stopColor="#000" />
          </radialGradient>
        </defs>

        {/* Círculo base */}
        <circle cx="100" cy="100" r="90" fill="url(#yinYangGradient)" />

        {/* Mitades del Yin-Yang */}
        <path
          d="M100,10 A90,90 0 0,1 100,190 A45,45 0 0,0 100,10"
          fill="#fff"
        />
        <path
          d="M100,10 A90,90 0 0,0 100,190 A45,45 0 0,1 100,10"
          fill="#000"
        />

        {/* Esferas de transición (trails) */}
        <motion.circle
          cx="100"
          r="10"
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
          style={{ zIndex: 1 }}
        />
        <motion.circle
          cx="100"
          r="10"
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
          style={{ zIndex: 1 }}
        />

        {/* Esferas principales */}
        <motion.circle
          cx="100"
          r="10"
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
          style={{ zIndex: 2 }}
        />
        <motion.circle
          cx="100"
          r="10"
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
          style={{ zIndex: 2 }}
        />
      </motion.svg>
    </div>
  );
};

export default React.memo(YinYangAnimation);
