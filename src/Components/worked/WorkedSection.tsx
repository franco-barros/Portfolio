"use client";
import React from "react";
import styles from "../../styles/worked/WorkedSection.module.css";
import CompletedApps from "./CompletedApps";
import CollaboratorComments from "./CollaboratorComments";

const WorkedSection = () => {
  return (
    <section id="worked" className={styles.workedSection}>
      <h2 className="globalTitle">Apps and Collaborators</h2>
      <div className={styles.workedLayout}>
        {/* Carrusel de Aplicaciones */}
        <div className={`${styles.columnWrapper} ${styles.equalSection}`}>
          <CompletedApps />
        </div>

        {/* Carrusel de Comentarios */}
        <div className={`${styles.columnWrapper} ${styles.equalSection}`}>
          <CollaboratorComments />
        </div>
      </div>
    </section>
  );
};

export default WorkedSection;
