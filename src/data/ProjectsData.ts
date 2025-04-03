import { projectDescriptions } from "./ProjectsDescriptions";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  video?: string;
  subtitle?: string;
  github?: string;
}

export const projectsData: Record<string, ProjectData> = {
  // Proyectos Frontend
  "market-multiverse": {
    id: "market-multiverse",
    title: "Market Multiverse",
    description: projectDescriptions["market-multiverse"],
    technologies: ["React", "CSS Modules", "Next.js"],
    images: ["MultiverMarket.png", "MultiverseMarket2.png"],
    video: "market-multiverse.mp4",
    subtitle: "market-multiverse.vtt",
    github: "https://github.com/franco-barros/Market-multiverse",
  },
  listify: {
    id: "listify",
    title: "Listify",
    description: projectDescriptions["listify"],
    technologies: ["React", "CSS Modules", "JavaScript"],
    images: ["Listify.png", "Listify2.png", "Listify3.png", "Listify4.png"],
    github: "https://github.com/franco-barros/Listify",
  },
  "lt-estetica-vehicular-landing-page": {
    id: "lt-estetica-vehicular-landing-page",
    title: "LT Estetica Vehicular Landing Page",
    description: projectDescriptions["lt-estetica-vehicular-landing-page"],
    technologies: ["React", "Next.js", "Typescript"],
    images: ["AutomotiveLanding1.png", "AutomotiveLanding2.png"],
    github: "https://github.com/franco-barros/LT-estetica",
  },
  // Proyectos Backend
  "express-api": {
    id: "express-api",
    title: "Express API",
    description: projectDescriptions["express-api"],
    technologies: ["Node.js", "Express", "MongoDB"],
    images: ["ExpressAPI.png"],
    github: "https://github.com/franco-barros/Node-Express",
  },
  javabank: {
    id: "javabank",
    title: "Java Bank",
    description: projectDescriptions["javabank"],
    technologies: ["Java", "Spring Boot"],
    images: ["JavaBank.png"],
    github: "https://github.com/franco-barros/JavaBank",
  },
  "nest-api": {
    id: "nest-api",
    title: "Nest API",
    description: projectDescriptions["nest-api"],
    technologies: ["Node.js", "Nest.js"],
    images: ["NestAPI.png"],
    github: "https://github.com/franco-barros/Node-Nest",
  },
};
