"use client";
import React from "react";
import InfiniteCarousel from "./carousel/CarouselComments";
import Card from "./card/CardComments";
import { commentsData } from "../../data/worked/CommentsData";

interface Props {
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  setIsPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

const CollaboratorComments: React.FC<Props> = ({
  activeIndex,
  setActiveIndex,
  setIsPaused,
}) => {
  return (
    <div className="commentsSection">
      <InfiniteCarousel
        items={commentsData}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setIsPaused={setIsPaused}
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
