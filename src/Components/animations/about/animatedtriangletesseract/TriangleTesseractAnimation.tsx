"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

const COLORS = [
  {
    outer: "#00bcd4",
    middle: "#4dd0e1",
    inner: "#b2ebf2",
  },
  {
    outer: "#f39c12",
    middle: "#f1c40f",
    inner: "#fceabb",
  },
  {
    outer: "#e91e63",
    middle: "#f06292",
    inner: "#f8bbd0",
  },
];

const getRandomColorSet = (excludeIndex: number): number => {
  let newIndex = excludeIndex;
  while (newIndex === excludeIndex) {
    newIndex = Math.floor(Math.random() * COLORS.length);
  }
  return newIndex;
};

const TriangleTesseractAnimation: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const [colorIndex, setColorIndex] = useState(0);

  const handleClick = () => {
    setFlipped((prev) => !prev);
    setColorIndex((prev) => getRandomColorSet(prev));
  };

  const { outer, middle, inner } = COLORS[colorIndex];

  return (
    <button
      onClick={handleClick}
      style={{
        width: "100%",
        maxWidth: 400,
        aspectRatio: "1 / 1",
        margin: "2rem auto",
        borderRadius: 12,
        background: "rgba(13, 27, 42, 0.7)", // background semitransparente igual a los otros
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
        cursor: "pointer",

        border: "none",
        outline: "none",
        boxShadow: "none",
      }}
      title="Triángulos en rotación"
    >
      <motion.svg
        viewBox="0 0 200 200"
        width="100%"
        height="100%"
        style={{ display: "block" }}
        animate={{ scaleX: flipped ? -1 : 1 }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        {/* Triángulo externo */}
        <motion.polygon
          points="100,20 180,180 20,180"
          fill="none"
          stroke={outer}
          strokeWidth={2}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        />

        {/* Triángulo medio */}
        <motion.polygon
          points="100,40 160,160 40,160"
          fill="none"
          stroke={middle}
          strokeWidth={2}
          animate={{ rotate: -360 }}
          transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
          style={{ transformOrigin: "100px 100px" }}
        />

        {/* Triángulo interno pulsando */}
        <motion.polygon
          points="100,60 140,140 60,140"
          fill={inner}
          stroke={outer}
          strokeWidth={1}
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 100px" }}
        />
      </motion.svg>
    </button>
  );
};

export default TriangleTesseractAnimation;
