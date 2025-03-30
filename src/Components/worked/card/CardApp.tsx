"use client";
import React, { useState } from "react";
import styles from "../../../styles/worked/card/CardApp.module.css";

interface CardAppProps {
  title: string;
  image: string;
}

const CardApp: React.FC<CardAppProps> = ({ title, image }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={styles.card}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={image} alt={title} className={styles.cardImage} />
      {isHovered && (
        <div className={styles.cardOverlay}>
          <h4>{title}</h4>
          <button className={styles.cardButton}>Ver app</button>
        </div>
      )}
    </div>
  );
};

export default CardApp;
