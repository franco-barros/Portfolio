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
      <div className={styles.content}>
        <p>{description}</p>
        <div className={styles.footer}>
          <a href={footerLink} target="_blank" rel="noopener noreferrer">
            {footer}
          </a>
          <span className={styles.rating}>
            <span className={styles.star}>⭐</span> {rating}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CardComment;
