import type { CraftBuildingsEnum } from "../../enums/craftBuildings.enum";
import type { ExtractionBuildingsEnum } from "../../enums/extractionBuildings.enum";
import type { PowerBuildingsEnum } from "../../enums/powerBuildings.enum";

export type BuildingsType = {
  name: CraftBuildingsEnum | ExtractionBuildingsEnum | PowerBuildingsEnum;
  powerBuilding: boolean;
  consumption: number;
};
