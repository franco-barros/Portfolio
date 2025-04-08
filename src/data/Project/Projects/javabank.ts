import { projectDescriptions } from "../ProjectsDescriptions";
import type { ProjectData } from "../types";

const javaBank: ProjectData = {
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
  video: "JavaBank.webm",
  github: "https://github.com/franco-barros/JavaBank",
};

export default javaBank;
