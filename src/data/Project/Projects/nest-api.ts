import { projectDescriptions } from "../ProjectsDescriptions";
import type { ProjectData } from "../types";

const nestApi: ProjectData = {
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
  video: "Nest.webm",
  github: "https://github.com/franco-barros/Node-Nest",
};

export default nestApi;
