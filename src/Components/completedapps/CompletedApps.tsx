"use client";
import React, { useState, useEffect } from "react";
import AppsCarousel from "./CarouselApp";
import CardApp from "./CardApp";
import { completedAppsData } from "../../data/completedapp/CompletedAppsData";
import styles from "../../styles/completedapps/CompletedApps.module.css";
import { FadeInOnScroll } from "../shared/fadeInonscroll"; // Asegúrate que el path es correcto

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
      <FadeInOnScroll>
        <h2 className={styles.sectionTitle}>Completed Apps</h2>
      </FadeInOnScroll>

      <FadeInOnScroll delay={0.2}>
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
      </FadeInOnScroll>
    </section>
  );
};

export default CompletedApps;
