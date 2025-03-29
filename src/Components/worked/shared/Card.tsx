"use client";
import React from "react";
import styles from "../../../styles/worked/shared/Card.module.css";

interface CardProps {
  title?: string;
  description: string;
  footer?: string;
  footerLink?: string;
  rating?: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  footer,
  footerLink,
  rating,
}) => {
  // Función para renderizar estrellas
  const renderStars = (ratingValue: number) => {
    const totalStars = 5;
    const filledStars = "★".repeat(ratingValue);
    const emptyStars = "☆".repeat(totalStars - ratingValue);
    return (
      <div className={styles.starRating}>
        <span className={styles.filledStars}>{filledStars}</span>
        <span className={styles.emptyStars}>{emptyStars}</span>
      </div>
    );
  };

  return (
    <div className={styles.card}>
      <div className={styles.cardContent}>
        {title && <h4 className={styles.cardTitle}>{title}</h4>}
        <p className={styles.cardDescription}>{description}</p>
        {/* Mostrar sección de estrellas si rating está definido */}
        {rating !== undefined && renderStars(rating)}
        {footer &&
          (footerLink ? (
            <a
              href={footerLink}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.cardFooter}
            >
              - {footer}
            </a>
          ) : (
            <p className={styles.cardFooter}>- {footer}</p>
          ))}
      </div>
    </div>
  );
};

export default Card;
