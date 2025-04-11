import { projectDescriptions } from "../ProjectsDescriptions";
import type { ProjectData } from "../types";

const listify: ProjectData = {
  id: "listify",
  title: "Listify",
  description: projectDescriptions["listify"],
  technologies: ["React", "CSS", "JavaScript"],
  images: [
    "/assets/images/listify/Listify1.png",
    "/assets/images/listify/Listify.png",
    "/assets/images/listify/Listify2.png",
    "/assets/images/listify/Listify3.png",
  ],
  video: "/assets/videos/Listify.webm",
  github: "https://github.com/franco-barros/Listify",
  deploy: "https://franco-barros.github.io/Listify/",
};

export default listify;
