import { projectDescriptions } from "../ProjectsDescriptions";
import type { ProjectData } from "../types";

const marketMultiverse: ProjectData = {
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
  deploy: "https://franco-barros.github.io/Market-multiverse/",
};

export default marketMultiverse;
