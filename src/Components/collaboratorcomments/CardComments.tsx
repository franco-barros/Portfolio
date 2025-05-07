"use client";
import React from "react";
import styles from "../../styles/collaboratorcommets/CardComments.module.css";

interface CardCommentProps {
  description: string;
  footer: string;
  footerLink: string;
}

const CardComment: React.FC<CardCommentProps> = ({
  description,
  footer,
  footerLink,
}) => {
  return (
    <div className={styles.card}>
      <div className={styles.content}>
        <p>{description}</p>
        <div className={styles.footer}>
          <a href={footerLink} target="_blank" rel="noopener noreferrer">
            {footer}
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardComment;
 