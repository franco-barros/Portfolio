"use client";
import React, { useState, useEffect } from "react";
import AppsCarousel from "./CarouselApp"; // asegúrate de apuntar al archivo correcto
import CardApp from "./CardApp";
import { completedAppsData } from "../../data/collaboratorcomments/CompletedAppsData";
import styles from "../../styles/completedapps/CompletedApps.module.css";

const CompletedApps: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % completedAppsData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section id="completed" className={styles.appsSection}>
      <h2 className={styles.sectionTitle}>Completed Apps</h2>
      <div className={styles.appsWrapper}>
        <AppsCarousel
          items={completedAppsData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          setIsPaused={setIsPaused}
          renderItem={(app) => (
            <CardApp title={app.name} image={app.image} link={app.link} />
          )}
        />
      </div>
    </section>
  );
};

export default CompletedApps;
