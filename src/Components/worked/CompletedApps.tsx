"use client";
import React from "react";
import styles from "../../styles/worked/CompletedApps.module.css"; // Crea este archivo CSS para la sección de apps

const appsData = [
  {
    name: "App 1",
    description: "Descripción breve de la App 1.",
    image: "/images/app1.png", // Ruta de la imagen
  },
  {
    name: "App 2",
    description: "Descripción breve de la App 2.",
    image: "/images/app2.png",
  },
  {
    name: "App 3",
    description: "Descripción breve de la App 3.",
    image: "/images/app3.png",
  },
  // Agrega más apps según sea necesario
];

const CompletedApps = () => {
  return (
    <div className={styles.appsSection}>
      <h3>Apps Completadas</h3>
      <div className={styles.appsList}>
        {appsData.map((app, index) => (
          <div key={index} className={styles.appCard}>
            {app.image && (
              <img src={app.image} alt={app.name} className={styles.appImage} />
            )}
            <div className={styles.appInfo}>
              <h4>{app.name}</h4>
              <p>{app.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompletedApps;
