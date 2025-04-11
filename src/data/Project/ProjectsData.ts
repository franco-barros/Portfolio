import type { ProjectData } from "./types";

import marketMultiverse from "./Projects/market-multiverse";
import listify from "./Projects/listify";
import ltEstetica from "./Projects/lt-estetica-vehicular-landing-page";
import expressApi from "./Projects/express-api";
import javaBank from "./Projects/javabank";
import nestApi from "./Projects/nest-api";

export const projectsData: Record<string, ProjectData> = {
  "market-multiverse": marketMultiverse,
  listify,
  "lt-estetica-vehicular-landing-page": ltEstetica,
  "express-api": expressApi,
  javabank: javaBank,
  "nest-api": nestApi,
};
