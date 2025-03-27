"use client";
import React from "react";
import styles from "../../styles/worked/CollaboratorComments.module.css"; // Crea este archivo CSS para la sección de comentarios

const commentsData = [
  {
    name: "Juan Pérez",
    comment:
      "Trabajar contigo ha sido una experiencia enriquecedora y profesional.",
  },
  {
    name: "María García",
    comment:
      "Tus soluciones son siempre creativas y efectivas. ¡Muy recomendable!",
  },
  {
    name: "Carlos López",
    comment:
      "Un gran compañero de equipo, siempre dispuesto a ayudar y aportar ideas.",
  },
  // Agrega más comentarios según lo requieras
];

const CollaboratorComments = () => {
  return (
    <div className={styles.commentsSection}>
      <h3>Comentarios de Colaboradores</h3>
      <div className={styles.commentsList}>
        {commentsData.map((comment, index) => (
          <div key={index} className={styles.commentCard}>
            <p className={styles.commentText}>{comment.comment}</p>
            <p className={styles.commentAuthor}>- {comment.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CollaboratorComments;
