"use client";
import React from "react";
import styles from "../../styles/worked/WorkedSection.module.css"; // Crea este archivo CSS para la sección principal
import CompletedApps from "./CompletedApps";
import CollaboratorComments from "./CollaboratorComments";

const WorkedSection = () => {
  return (
    <section id="worked" className={styles.workedSection}>
      <h2 className="globalTitle">Proyectos y Colaboradores</h2>
      <div className={styles.workedLayout}>
        <CompletedApps />
        <CollaboratorComments />
      </div>
    </section>
  );
};

export default WorkedSection;
