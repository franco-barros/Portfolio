"use client";
import React from "react";
import AppsCarousel from "./carousel/CarouselApp";
import CardApp from "./card/CardApp";

const appsData = [
  {
    name: "App 1",
    description: "Brief description of App 1.",
    image: "/assets/images/Listify2.png",
  },
  {
    name: "App 2",
    description: "Brief description of App 2.",
    image: "/assets/images/Listify3.png",
  },
  {
    name: "App 3",
    description: "Brief description of App 3.",
    image: "/assets/images/Listify2.png",
  },
];

const CompletedApps: React.FC = () => {
  return (
    <div className="appsSection">
      <h3>Completed Apps</h3>
      <AppsCarousel
        items={appsData}
        interval={2000} // Cada app se muestra 2 segundos
        renderItem={(app) => <CardApp title={app.name} image={app.image} />}
      />
    </div>
  );
};

export default CompletedApps;
