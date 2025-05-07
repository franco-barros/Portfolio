"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/completedapps/CardApp.module.css";

interface CardAppProps {
  title: string;
  image: string;
  link: string;
}

const CardApp: React.FC<CardAppProps> = ({ title, image, link }) => {
  const cardContent = (
    <div className={styles.card}>
      <Image
        src={image}
        alt={title}
        width={600}
        height={400}
        className={styles.cardImage}
        quality={100}
        loading="lazy"
      />
      <div className={styles.cardButtonContainer}>
        <button className={styles.cardButton}>Ver app</button>
      </div>
    </div>
  );

  // Verificar si el enlace es externo
  const isExternal = link.startsWith("http");

  return isExternal ? (
    <a href={link} target="_blank" rel="noopener noreferrer">
      {cardContent}
    </a>
  ) : (
    <Link href={link}>{cardContent}</Link>
  );
};

export default CardApp;
