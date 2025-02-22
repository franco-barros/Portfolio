"use client";
import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import styles from "../../styles/Greeting.module.css";

const greetings: string[] = [
  "Hola..",
  "Hello..",
  "Bonjour..", // Frances
  "Ciao..", // Italiano
  "こんにちは..", // Chino
  "Hallo..", // Alemán
  "Olá..", // Portugués
  "Привет..", // Ruso
];

const Greeting: React.FC = () => {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % greetings.length);
    }, 600);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.container}>
      <AnimatePresence mode="wait">
        <motion.h1
          key={greetings[index]}
          className={styles.greeting}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {greetings[index]}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
};

export default Greeting;
