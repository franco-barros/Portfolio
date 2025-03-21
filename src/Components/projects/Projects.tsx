"use client";
import React from "react";
import styles from "../../styles/projects/Projects.module.css";
import Project from "./Project";

const projectData = [
  {
    title: "Market Multiverse",
    description:
      "A modern e-commerce platform with multiple categories and a responsive design.",
    link: "https://francoisdev-market-multiverse.com",
    linkText: "View Project",
    technologies: ["React", "CSS Modules", "Next.js"],
  },
  {
    title: "Listify",
    description:
      "A web-based task list application with real-time synchronization between browser tabs.",
    link: "https://github.com/francoisrosales/Listify",
    linkText: "View on GitHub",
    technologies: ["React", "CSS Modules", "JavaScript"],
  },
  {
    title: "DevConnect",
    description:
      "A social network for developers to share projects and collaborate.",
    link: "https://github.com/francoisrosales/DevConnect",
    linkText: "View on GitHub",
    technologies: ["Next.js", "Tailwind CSS", "MongoDB"],
  },
  {
    title: "CryptoStats",
    description:
      "A real-time dashboard for tracking cryptocurrencies with interactive charts.",
    link: "https://cryptostats-live.com",
    linkText: "View Project",
    technologies: ["React", "Recharts", "Node.js"],
  },
  {
    title: "TaskFlow",
    description:
      "Project management tool with Kanban board and team collaboration.",
    link: "https://github.com/francoisrosales/TaskFlow",
    linkText: "View on GitHub",
    technologies: ["React", "Redux", "Firebase"],
  },
  {
    title: "WeatherNow",
    description:
      "A web application to check real-time weather with external API integration.",
    link: "https://weathernow-app.com",
    linkText: "View Project",
    technologies: ["Vue.js", "CSS Modules", "OpenWeather API"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className="globalTitle">Projects</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.projectsGrid}>
          {projectData.map((project, index) => (
            <Project key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
