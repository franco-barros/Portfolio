"use client";
import React, { useState, useEffect, useRef } from "react";
import styles from "../../../styles/Greeting.module.css";

interface GreetingProps {
  onComplete?: () => void;
}

const greetings: string[] = [
  "Hola..",
  "Hello..",
  "Bonjour..",
  "Ciao..",
  "こんにちは..",
  "Hallo..",
  "Olá..",
  "Привет..",
];

const Greeting: React.FC<GreetingProps> = ({ onComplete }) => {
  const [index, setIndex] = useState<number>(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    let counter = 0;
    const intervalId = setInterval(() => {
      if (counter < greetings.length - 1) {
        counter++;
        setIndex(counter);
      } else {
        clearInterval(intervalId);
        timeoutRef.current = setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
        }, 300); // Espera final reducida a 300ms
      }
    }, 200); // Cambio de saludo cada 200ms

    return () => {
      clearInterval(intervalId);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [onComplete]);

  return (
    <div className={styles.container}>
      <h1 className={styles.greeting}>{greetings[index]}</h1>
    </div>
  );
};

export default Greeting;
