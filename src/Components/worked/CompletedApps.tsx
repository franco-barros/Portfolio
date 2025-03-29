"use client";
import React from "react";
import InfiniteCarousel from "./shared/CarouselInfinite";
import Card from "./shared/Card";

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

const CompletedApps = () => {
  return (
    <div className="appsSection">
      <h3>Completed Apps</h3>
      <InfiniteCarousel
        items={appsData}
        interval={2000} // Cada app se muestra 2 segundos
        orientation="vertical"
        renderItem={(app) => (
          <Card title={app.name} description={app.description} />
        )}
      />
    </div>
  );
};

export default CompletedApps;
