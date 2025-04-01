"use client";
import React from "react";
import styles from "../../styles/skills/Skills.module.css";
import SkillCarousel from "./SkillCarousel";

const skillsData = [
  {
    name: "Node.js",
    category: "backend",
    description: "I use Node.js to build scalable services.",
    usage: "I use it to create robust REST APIs and microservices.",
  },
  {
    name: "Express.js",
    category: "backend",
    description: "Express provides a minimalist framework for the backend.",
    usage: "I use it to structure and simplify the logic of my servers.",
  },
  {
    name: "NestJS",
    category: "backend",
    description:
      "NestJS helps me structure backend applications with decorators.",
    usage: "I prefer NestJS to organize complex projects.",
  },
  {
    name: "Java",
    category: "backend",
    description: "Java is used for robust enterprise solutions.",
    usage: "I use Java in projects that require high scalability.",
  },
  {
    name: "JavaScript",
    category: "frontend",
    description: "JavaScript is the foundation for dynamic web pages.",
    usage: "I use it to create client-side interactions.",
  },
  {
    name: "TypeScript",
    category: "frontend",
    description: "TypeScript adds static typing to JavaScript.",
    usage: "I prefer TypeScript to avoid compile-time errors.",
  },
  {
    name: "React",
    category: "frontend",
    description: "React is used to build interactive user interfaces.",
    usage: "I use React to develop reactive web applications.",
  },
  {
    name: "Next.js",
    category: "frontend",
    description: "Next.js enables server-side rendering in React applications.",
    usage: "I use it to optimize SEO and performance in React projects.",
  },
  {
    name: "CSS",
    category: "frontend",
    description: "CSS is used to style web pages.",
    usage: "I use CSS to add the visual touch to my applications.",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    description:
      "Tailwind CSS offers utilities for quick and consistent styling.",
    usage: "I prefer Tailwind to speed up style development.",
  },
  {
    name: "HTML",
    category: "frontend",
    description: "HTML structures the content of web pages.",
    usage: "It is the foundation of all my web pages.",
  },
];

// Technology-to-Devicon class mapping
const deviconMap: Record<string, string> = {
  "Node.js": "devicon-nodejs-plain colored",
  "Express.js": "devicon-express-original colored",
  NestJS: "devicon-nestjs-plain colored",
  Java: "devicon-java-plain colored",
  JavaScript: "devicon-javascript-plain colored",
  TypeScript: "devicon-typescript-plain colored",
  React: "devicon-react-original colored",
  "Next.js": "devicon-nextjs-original colored",
  CSS: "devicon-css3-plain colored",
  "Tailwind CSS": "devicon-tailwindcss-plain colored",
  HTML: "devicon-html5-plain colored",
};

const Skills = () => {
  return (
    <section id="skills" className={styles.skillsSection}>
      <div className={styles.backgroundEffect}></div>
      <h2 className="globalTitle">Tools</h2>

      <div className={styles.skillsLayout}>
        {/* Technology list */}
        <div className={styles.skillsList}>
          {skillsData.map((skill, index) => (
            <span
              key={index}
              className={`${styles.skillTag} ${
                skill.category === "frontend" ? styles.frontend : styles.backend
              }`}
            >
              {deviconMap[skill.name] && (
                <i
                  className={deviconMap[skill.name]}
                  style={{ marginRight: "8px" }}
                ></i>
              )}
              {skill.name}
            </span>
          ))}
        </div>
        {/* Skill carousel */}
        <div className={styles.skillCarouselContainer}>
          <SkillCarousel skills={skillsData} autoRotateInterval={3000} />
        </div>
      </div>
    </section>
  );
};

export default Skills;
