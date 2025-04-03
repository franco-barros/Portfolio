"use client";
import React, { useState } from "react";
import InfiniteCarousel from "./carousel/CarouselComments";
import Card from "./card/CardComments";
import { useCommentsAutoPlay } from "../../hooks/useCommentsAutoPlay";
import { commentsData } from "../../data/CommentsData";

const CollaboratorComments = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const interval = 2000;

  // Se usa el hook para controlar el autoplay, usando la cantidad de comentarios de la data importada
  useCommentsAutoPlay(
    activeIndex,
    setActiveIndex,
    interval,
    false,
    commentsData.length
  );

  return (
    <div className="commentsSection">
      <h3>Collaborator Comments</h3>
      <InfiniteCarousel
        items={commentsData}
        renderItem={(comment) => (
          <Card
            description={comment.comment}
            footer={comment.name}
            footerLink={comment.linkedin}
            rating={comment.rating}
          />
        )}
      />
    </div>
  );
};

export default CollaboratorComments;
