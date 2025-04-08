import { projectDescriptions } from "../ProjectsDescriptions";
import type { ProjectData } from "../types";

const listify: ProjectData = {
  id: "listify",
  title: "Listify",
  description: projectDescriptions["listify"],
  technologies: ["React", "CSS", "JavaScript"],
  images: [
    "listify/Listify.png",
    "listify/Listify1.png",
    "listify/Listify2.png",
    "listify/Listify3.png",
  ],
  video: "Listify.webm",
  github: "https://github.com/franco-barros/Listify",
  deploy: "https://franco-barros.github.io/Listify/",
};

export default listify;
