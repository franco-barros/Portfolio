import { notFound } from "next/navigation";
import Image from "next/image";
import React from "react";

const projectData = [
  {
    projectsId: "market-multiverse",
    title: "Market Multiverse",
    image: "/assets/images/MultiverMarket.png",
    technologies: ["React", "CSS Modules", "Next.js"],
    description:
      "Un mercado en línea con un diseño inmersivo y una experiencia de usuario fluida.",
  },
  {
    projectsId: "listify",
    title: "Listify",
    image: "/assets/images/Listify.png",
    technologies: ["React", "CSS Modules", "JavaScript"],
    description:
      "Una aplicación para crear y administrar listas de tareas de manera eficiente.",
  },
  {
    projectsId: "taskflow",
    title: "TaskFlow",
    image: "/assets/images/MultiverMarket.png",
    technologies: ["React", "Redux", "Firebase"],
    description:
      "Un gestor de tareas avanzado con sincronización en tiempo real.",
  },
  {
    projectsId: "devconnect",
    title: "DevConnect",
    image: "/assets/images/MultiverMarket.png",
    technologies: ["Java", "Node.js", "MongoDB"],
    description:
      "Una plataforma social para desarrolladores donde pueden compartir conocimientos.",
  },
  {
    projectsId: "cryptostats",
    title: "CryptoStats",
    image: "/assets/images/MultiverMarket.png",
    technologies: ["Java", "Spring Boot", "Node.js"],
    description:
      "Una herramienta para visualizar y analizar datos del mercado de criptomonedas.",
  },
  {
    projectsId: "weathernow",
    title: "WeatherNow",
    image: "/assets/images/MultiverMarket.png",
    technologies: ["Express", "Nest.js", "OpenWeather API"],
    description:
      "Una aplicación que proporciona información meteorológica en tiempo real.",
  },
];

export default function ProjectPage({
  params,
}: {
  params: { projectsId: string };
}) {
  const project = projectData.find(
    (proj) => proj.projectsId === params.projectsId
  );

  if (!project) notFound();

  return (
    <div style={{ padding: "2rem" }}>
      <h1>{project.title}</h1>
      <Image src={project.image} alt={project.title} width={600} height={400} />
      <p>{project.description}</p>
      <p>
        <strong>Tecnologías:</strong> {project.technologies.join(", ")}
      </p>
    </div>
  );
}
