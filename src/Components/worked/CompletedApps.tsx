"use client";
import React from "react";
import AppsCarousel from "./carousel/CarouselApp";
import CardApp from "./card/CardApp";
import { completedAppsData } from "../../data/worked/CompletedAppsData";

interface Props {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

const CompletedApps: React.FC<Props> = ({
  activeIndex,
  setActiveIndex,
  setIsPaused,
}) => {
  return (
    <div className="appsSection">
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
  );
};

export default CompletedApps;
