"use client";
import React from "react";
import styles from "../../../styles/worked/card/CardApp.module.css";

interface CardAppProps {
  title: string;
  image: string;
  onClick?: () => void;
}

const CardApp: React.FC<CardAppProps> = ({ title, image, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <img src={image} alt={title} className={styles.cardImage} />
      <div className={styles.cardButtonContainer}>
        <button className={styles.cardButton}>Ver app</button>
      </div>
    </div>
  );
};

export default CardApp;
