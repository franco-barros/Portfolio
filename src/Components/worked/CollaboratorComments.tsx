"use client";
import React from "react";
import CardCarousel from "./shared/CardCarousel";
import Card from "./shared/Card";

const commentsData = [
  {
    name: "Juan Pérez",
    comment:
      "Working with you has been an enriching and professional experience. I appreciate your dedication and attention to detail. It has truly made a difference in our projects.",
    linkedin: "https://www.linkedin.com/in/juanperez",
    rating: 5,
  },
  {
    name: "María García",
    comment:
      "Your solutions are always creative and effective. Highly recommended! The innovative approach you bring to each project has set a new standard for quality and efficiency.",
    linkedin: "https://www.linkedin.com/in/mariagarcia",
    rating: 4,
  },
  {
    name: "Carlos López",
    comment:
      "A great team player, always willing to help and contribute ideas. Your collaborative spirit and reliability have been key to our success.",
    linkedin: "https://www.linkedin.com/in/carloslopez",
    rating: 4,
  },
];

const CollaboratorComments = () => {
  return (
    <div>
      <h3>Collaborator Comments</h3>
      <CardCarousel
        items={commentsData}
        autoRotateInterval={5000}
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
