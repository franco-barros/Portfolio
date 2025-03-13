"use client";
import React, { useState, useEffect } from "react";
import styles from "../../styles/Greeting.module.css";

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

  useEffect(() => {
    let counter = 0;
    const interval = setInterval(() => {
      if (counter < greetings.length - 1) {
        counter++;
        setIndex(counter);
      } else {
        clearInterval(interval);
        setTimeout(() => {
          if (onComplete) {
            onComplete();
          }
        }, 300); // Espera final reducida a 300ms
      }
    }, 200); // Cambio de saludo cada 200ms

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className={styles.container}>
      <h1 className={styles.greeting}>{greetings[index]}</h1>
    </div>
  );
};

export default Greeting;
