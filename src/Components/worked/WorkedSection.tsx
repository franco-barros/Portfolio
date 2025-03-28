"use client";
import React from "react";
import styles from "../../styles/worked/WorkedSection.module.css"; // Create this CSS file for the main section
import CompletedApps from "./CompletedApps";
import CollaboratorComments from "./CollaboratorComments";

const WorkedSection = () => {
  return (
    <section id="worked" className={styles.workedSection}>
      <h2 className="globalTitle">Projects and Collaborators</h2>
      <div className={styles.workedLayout}>
        <CompletedApps />
        <CollaboratorComments />
      </div>
    </section>
  );
};

export default WorkedSection;
