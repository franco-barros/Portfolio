import { projectDescriptions } from "../ProjectsDescriptions";
import type { ProjectData } from "../types";

const nestApi: ProjectData = {
  id: "nest-api",
  title: "Nest API",
  description: projectDescriptions["nest-api"],
  technologies: ["Node.js", "Nest.js"],
  images: [
    "/assets/images/nest/Nest.png",
    "/assets/images/nest/Nest1.png",
    "/assets/images/nest/Nest2.png",
    "/assets/images/nest/Nest3.png",
    "/assets/images/nest/Nest4.png",
    "/assets/images/nest/Nest5.png",
  ],
  video: "/assets/videos/Nest.webm",
  github: "https://github.com/franco-barros/Node-Nest",
};

export default nestApi;
