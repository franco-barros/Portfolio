import { projectDescriptions } from "../ProjectsDescriptions";
import type { ProjectData } from "../types";

const jurismind: ProjectData = {
  id: "jurismind",
  title: "Jurismind",
  description: projectDescriptions["jurismind"],
  technologies: ["Tailwind", "Typescript", "Next.js"],
  images: [
    "/assets/images/jurismind/jurismind4.png",
    "/assets/images/jurismind/jurismind.png",
    "/assets/images/jurismind/jurismind1.png",
    "/assets/images/jurismind/jurismind2.png",
    "/assets/images/jurismind/jurismind3.png",
    "/assets/images/jurismind/jurismind5.png",
    "/assets/images/jurismind/jurismind6.png",
    "/assets/images/jurismind/jurismind7.png",
    "/assets/images/jurismind/jurismind8.png",
    "/assets/images/jurismind/jurismind9.png",
  ],
  deploy: "https://juris-mind-front.vercel.app/",
};

export default jurismind;
