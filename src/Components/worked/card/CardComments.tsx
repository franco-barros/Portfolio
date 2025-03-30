"use client";
import React from "react";
import styles from "../../../styles/worked/card/CardComments.module.css";

interface CardCommentProps {
  description: string;
  footer: string;
  footerLink: string;
  rating: number;
}

const CardComment: React.FC<CardCommentProps> = ({
  description,
  footer,
  footerLink,
  rating,
}) => {
  return (
    <div className={styles.card}>
      <p>{description}</p>
      <div className={styles.footer}>
        <a href={footerLink} target="_blank" rel="noopener noreferrer">
          {footer}
        </a>
        <span className={styles.rating}>⭐ {rating}</span>
      </div>
    </div>
  );
};

export default CardComment;
