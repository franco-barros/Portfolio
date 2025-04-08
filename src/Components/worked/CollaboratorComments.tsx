"use client";
import React from "react";
import InfiniteCarousel from "./carousel/CarouselComments";
import Card from "./card/CardComments";
import { commentsData } from "../../data/CommentsData";

interface Props {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>; // agregado
}

const CollaboratorComments: React.FC<Props> = ({
  activeIndex,
  setActiveIndex,
  setIsPaused, // agregado
}) => {
  return (
    <div className="commentsSection">
      <h3>Collaborator Comments</h3>
      <InfiniteCarousel
        items={commentsData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setIsPaused={setIsPaused} // agregado
        renderItem={(comment) => (
          <Card
            description={comment.comment}
            footer={comment.name}
            footerLink={comment.linkedin}
          />
        )}
      />
    </div>
  );
};

export default CollaboratorComments;
