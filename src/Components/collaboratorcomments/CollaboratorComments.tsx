// CollaboratorComments.tsx
"use client";
import React, { useState } from "react";
import InfiniteCarousel from "./CarouselComments";
import Card from "./CardComments";
import { commentsData } from "../../data/collaboratorcomments/CommentsData";
import styles from "../../styles/collaboratorcommets/CollaboratorComments.module.css";

const CollaboratorComments: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="collaborators" className={styles.commentsSection}>
      <h2 className={styles.sectionTitle}>Collaborator Comments</h2>
      <div className={styles.commentsWrapper}>
        <InfiniteCarousel
          items={commentsData}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          renderItem={(comment) => (
            <Card
              description={comment.comment}
              footer={comment.name}
              footerLink={comment.linkedin}
            />
          )}
        />
      </div>
    </section>
  );
};

export default CollaboratorComments;
