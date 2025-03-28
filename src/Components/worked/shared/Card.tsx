"use client";
import React from "react";
import Image from "next/image";
import styles from "../../../styles/worked/shared/Card.module.css";

interface CardProps {
  image?: string; // Ruta de la imagen (opcional)
  title?: string; // Título de la tarjeta (opcional)
  description: string; // Descripción o contenido principal
  footer?: string; // Contenido adicional o autor (opcional)
  footerLink?: string; // URL para enlazar al perfil de LinkedIn
  rating?: number; // Calificación de 1 a 5 (opcional)
}

const Card: React.FC<CardProps> = ({
  image,
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
      {image && (
        <div className={styles.cardImageWrapper}>
          <Image
            src={image}
            alt={title || "Card Image"}
            width={300}
            height={200}
            layout="responsive"
            className={styles.cardImage}
          />
        </div>
      )}
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
