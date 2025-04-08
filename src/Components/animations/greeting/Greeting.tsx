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
  const [hasCompleted, setHasCompleted] = useState(false);
  const displayTime = shortVersion ? 125 : 250;

  useEffect(() => {
    if (index < greetings.length - 1) {
      const timer = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, displayTime);
      return () => clearTimeout(timer);
    } else if (!hasCompleted) {
      const timer = setTimeout(() => {
        setHasCompleted(true);
        if (onComplete) {
          onComplete();
        }
      }, displayTime + 200);
      return () => clearTimeout(timer);
    }
  }, [index, displayTime, onComplete, hasCompleted]);

  if (hasCompleted) return null;

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
