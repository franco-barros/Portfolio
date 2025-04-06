// src/Components/animations/greeting/Greeting.tsx
"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import styles from "../../../styles/animations/Greeting.module.css";

interface GreetingProps {
  onComplete?: () => void;
  shortVersion?: boolean;
}

const greetings = [
  "Hola..",
  "Hello..",
  "Bonjour..",
  "Ciao..",
  "こんにちは..",
  "Hallo..",
  "Olá..",
  "Привет..",
];

const Greeting: React.FC<GreetingProps> = ({
  onComplete,
  shortVersion = false,
}) => {
  const [index, setIndex] = useState(0);
  const displayTime = shortVersion ? 125 : 250;

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex(index + 1);
      }, displayTime);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        if (onComplete) {
          onComplete();
        }
      }, displayTime);
      return () => clearTimeout(timer);
    }
  }, [index, displayTime, onComplete]);

  return (
    <motion.div
      className={styles.fullscreenOverlay}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.3 }}
    >
      <h1 className={styles.greeting}>{greetings[index]}</h1>
    </motion.div>
  );
};

export default Greeting;
