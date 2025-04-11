import { projectDescriptions } from "../ProjectsDescriptions";
import type { ProjectData } from "../types";

const marketMultiverse: ProjectData = {
  id: "market-multiverse",
  title: "Market Multiverse",
  description: projectDescriptions["market-multiverse"],
  technologies: ["React", "CSS", "Next.js"],
  images: [
    "/assets/images/marketmultiverse/MarketMultiverse.png",
    "/assets/images/marketmultiverse/MarketMultiverse1.png",
    "/assets/images/marketmultiverse/MarketMultiverse.png",
  ],
  video: "/assets/videos/MarketMultiverse.webm",
  subtitle: "/assets/subtitles/market-multiverse.vtt",
  github: "https://github.com/franco-barros/Market-multiverse",
  deploy: "https://franco-barros.github.io/Market-multiverse/",
};

export default marketMultiverse;
