import { projectDescriptions } from "./ProjectsDescriptions";

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  images: string[];
  video?: string;
  subtitle?: string;
}

export const projectsData: Record<string, ProjectData> = {
  "market-multiverse": {
    id: "market-multiverse",
    title: "Market Multiverse",
    description: projectDescriptions["market-multiverse"],
    technologies: ["React", "CSS Modules", "Next.js"],
    images: ["MultiverMarket.png", "MultiverseMarket2.png"],
    video: "market-multiverse.mp4",
    subtitle: "market-multiverse.vtt",
  },
  listify: {
    id: "listify",
    title: "Listify",
    description: projectDescriptions["listify"],
    technologies: ["React", "CSS Modules", "JavaScript"],
    images: ["Listify.png", "Listify2.png", "Listify3.png", "Listify4.png"],
    video: "listify.mp4",
    subtitle: "listify.vtt",
  },
  taskflow: {
    id: "taskflow",
    title: "TaskFlow",
    description: projectDescriptions["taskflow"],
    technologies: ["React", "Redux", "Firebase"],
    images: ["TaskFlow1.png", "TaskFlow2.png"],
  },
};
