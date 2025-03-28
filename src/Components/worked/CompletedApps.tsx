"use client";
import React from "react";
import CardCarousel from "./shared/CardCarousel";
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
    <div>
      <h3>Completed Apps</h3>
      <CardCarousel
        items={appsData}
        autoRotateInterval={4000} // Ajusta el intervalo según necesites
        renderItem={(app) => (
          <Card
            image={app.image}
            title={app.name}
            description={app.description}
          />
        )}
      />
    </div>
  );
};

export default CompletedApps;
