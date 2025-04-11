import { projectDescriptions } from "../ProjectsDescriptions";
import type { ProjectData } from "../types";

const javaBank: ProjectData = {
  id: "javabank",
  title: "Java Bank",
  description: projectDescriptions["javabank"],
  technologies: ["Java", "Spring Boot"],
  images: [
    "/assets/images/javabank/JavaBank.png",
    "/assets/images/javabank/JavaBank1.png",
    "/assets/images/javabank/JavaBank2.png",
    "/assets/images/javabank/JavaBank3.png",
    "/assets/images/javabank/JavaBank4.png",
    "/assets/images/javabank/JavaBank5.png",
    "/assets/images/javabank/JavaBank6.png",
    "/assets/images/javabank/JavaBank7.png",
  ],
  video: "/assets/videos/JavaBank.webm",
  github: "https://github.com/franco-barros/JavaBank",
};

export default javaBank;
