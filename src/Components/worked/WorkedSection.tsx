"use client";
import React, { useState } from "react";
import styles from "../../styles/worked/WorkedSection.module.css";
import CompletedApps from "./CompletedApps";
import CollaboratorComments from "./CollaboratorComments";
import { useSyncedAutoPlay } from "../../hooks/useSyncedAutoPlay";
import { completedAppsData } from "../../data/worked/CompletedAppsData";
import { commentsData } from "../../data/worked/CommentsData";

const WorkedSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const totalItems = Math.max(completedAppsData.length, commentsData.length); // => 3

  useSyncedAutoPlay(activeIndex, setActiveIndex, 2000, isPaused, totalItems);

  return (
    <section id="worked" className={styles.workedSection}>
      <h2 className={styles.workedTitle}>Apps and Collaborators</h2>
      <div className={styles.workedLayout}>
        <div className={`${styles.columnWrapper} ${styles.equalSection}`}>
          <h3 className={styles.workedSubTitle}>Completed Apps</h3>
          <CompletedApps
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setIsPaused={setIsPaused}
          />
        </div>
        <div className={`${styles.columnWrapper} ${styles.equalSection}`}>
          <h3 className={styles.workedSubTitle}>Collaborators</h3>
          <CollaboratorComments
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            setIsPaused={setIsPaused}
          />
        </div>
      </div>
    </section>
  );
};

export default WorkedSection;
