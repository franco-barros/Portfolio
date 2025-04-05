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
  deploy?: string;
}

export const projectsData: Record<string, ProjectData> = {
  // Proyectos Frontend
  "market-multiverse": {
    id: "market-multiverse",
    title: "Market Multiverse",
    description: projectDescriptions["market-multiverse"],
    technologies: ["React", "CSS", "Next.js"],
    images: [
      "marketmultiverse/MarketMultiverse.png",
      "marketmultiverse/MarketMultiverse1.png",
      "marketmultiverse/MarketMultiverse2.png",
    ],
    video: "MarketMultiverse.webm",
    subtitle: "market-multiverse.vtt",
    github: "https://github.com/franco-barros/Market-multiverse",
    deploy: "https://mi-proyecto.vercel.app",
  },
  listify: {
    id: "listify",
    title: "Listify",
    description: projectDescriptions["listify"],
    technologies: ["React", "CSS", "JavaScript"],
    images: [
      "listify/Listify.png",
      "listify/Listify2.png",
      "listify/Listify3.png",
      "listify/Listify4.png",
    ],
    video: "listify/Listify.webm",
    github: "https://github.com/franco-barros/Listify",
    deploy: "https://mi-proyecto.vercel.app",
  },
  "lt-estetica-vehicular-landing-page": {
    id: "lt-estetica-vehicular-landing-page",
    title: "LT Estetica Vehicular Landing Page",
    description: projectDescriptions["lt-estetica-vehicular-landing-page"],
    technologies: ["React", "Next.js", "Typescript"],
    images: [
      "ltvehicular/LtVehicular.png",
      "ltvehicular/LtVehicular1.png",
      "ltvehicular/LtVehicular2.png",
      "ltvehicular/LtVehicular3.png",
      "ltvehicular/LtVehicular4.png",
      "ltvehicular/LtVehicular5.png",
      "ltvehicular/LtVehicular6.png",
    ],
    video: "LtVehicular.webm",
    github: "https://github.com/franco-barros/LT-estetica",
    deploy: "https://mi-proyecto.vercel.app",
  },
  // Proyectos Backend
  "express-api": {
    id: "express-api",
    title: "Express API",
    description: projectDescriptions["express-api"],
    technologies: ["Node.js", "Express"],
    images: [
      "express/Express1.png",
      "express/Express2.png",
      "express/Express3.png",
      "express/Express4.png",
      "express/Express5.png",
      "express/Express6.png",
      "express/Express7.png",
      "express/Express8.png",
      "express/Express9.png",
    ],
    github: "https://github.com/franco-barros/Node-Express",
  },
  javabank: {
    id: "javabank",
    title: "Java Bank",
    description: projectDescriptions["javabank"],
    technologies: ["Java", "Spring Boot"],
    images: [
      "javabank/JavaBank.png",
      "javabank/JavaBank1.png",
      "javabank/JavaBank2.png",
      "javabank/JavaBank3.png",
      "javabank/JavaBank4.png",
      "javabank/JavaBank5.png",
      "javabank/JavaBank6.png",
      "javabank/JavaBank7.png",
    ],
    video: "javabank/JavaBank.webm",
    github: "https://github.com/franco-barros/JavaBank",
  },
  "nest-api": {
    id: "nest-api",
    title: "Nest API",
    description: projectDescriptions["nest-api"],
    technologies: ["Node.js", "Nest.js"],
    images: [
      "nest/Nest.png",
      "nest/Nest1.png",
      "nest/Nest2.png",
      "nest/Nest3.png",
      "nest/Nest4.png",
      "nest/Nest5.png",
    ],
    video: "nest/Nest.webm",
    github: "https://github.com/franco-barros/Node-Nest",
  },
};
