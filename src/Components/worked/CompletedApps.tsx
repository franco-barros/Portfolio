"use client";
import React from "react";
import AppsCarousel from "./carousel/CarouselApp";
import CardApp from "./card/CardApp";
import { completedAppsData } from "../../data/CompletedAppsData";

interface Props {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>; // agregado
}

const CompletedApps: React.FC<Props> = ({
  activeIndex,
  setActiveIndex,
  setIsPaused, // agregado
}) => {
  return (
    <div className="appsSection">
      <h3>Completed Apps</h3>
      <AppsCarousel
        items={completedAppsData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setIsPaused={setIsPaused} // agregado
        renderItem={(app) => (
          <CardApp title={app.name} image={app.image} link={app.link} />
        )}
      />
    </div>
  );
};

export default CompletedApps;
