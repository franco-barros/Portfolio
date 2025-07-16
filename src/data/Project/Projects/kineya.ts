import { projectDescriptions } from "../ProjectsDescriptions";
import type { ProjectData } from "../types";

const kineya: ProjectData = {
  id: "kineya",
  title: "Kine-Ya",
  description: projectDescriptions["kine-ya"],
  technologies: ["Next.js", "Tailwind"],
  images: [
    "/assets/images/kineya/kineya1.png",
    "/assets/images/kineya/kineya2.png",
    "/assets/images/kineya/kineya3.png",
    "/assets/images/kineya/kineya4.png",
    "/assets/images/kineya/kineya5.png",
    "/assets/images/kineya/kineya6.png",
    "/assets/images/kineya/kineya7.png",
  ],
  github: "https://github.com/franco-barros/Kine-ya",
  deploy: "https://kine-ya.vercel.app/",
};

export default kineya;
