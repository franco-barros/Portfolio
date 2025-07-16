import type { ProjectData } from "./types";

import jurismind from "./Projects/juridismind";
import kineya from "./Projects/kineya";
import ltEstetica from "./Projects/lt-estetica-vehicular-landing-page";
import expressApi from "./Projects/express-api";
import javaBank from "./Projects/javabank";
import nestApi from "./Projects/nest-api";

export const projectsData: Record<string, ProjectData> = {
  jurismind,
  kineya,
  "lt-estetica-vehicular-landing-page": ltEstetica,
  "express-api": expressApi,
  javabank: javaBank,
  "nest-api": nestApi,
};
