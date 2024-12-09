import { CraftBuildingsEnum } from "../enums/craftBuildings.enum";
import { ExtractionBuildingsEnum } from "../enums/extractionBuildings.enum";
import { PowerBuildingsEnum } from "../enums/powerBuildings.enum";
import type { BuildingsType } from "../types/satisfactory/buildings.type";

export const buildings: Record<
  CraftBuildingsEnum | ExtractionBuildingsEnum | PowerBuildingsEnum,
  BuildingsType
> = {
  [CraftBuildingsEnum.Smelter]: {
    name: CraftBuildingsEnum.Smelter,
    powerBuilding: false,
    consumption: 4,
  },
  [CraftBuildingsEnum.Foundry]: {
    name: CraftBuildingsEnum.Foundry,
    powerBuilding: false,
    consumption: 16,
  },
  [CraftBuildingsEnum.Constructor]: {
    name: CraftBuildingsEnum.Constructor,
    powerBuilding: false,
    consumption: 4,
  },
  [CraftBuildingsEnum.Assembler]: {
    name: CraftBuildingsEnum.Assembler,
    powerBuilding: false,
    consumption: 15,
  },
  [ExtractionBuildingsEnum.Miner_MK1]: {
    name: ExtractionBuildingsEnum.Miner_MK1,
    powerBuilding: false,
    consumption: 5,
  },
  [ExtractionBuildingsEnum.Water_Extractor]: {
    name: ExtractionBuildingsEnum.Water_Extractor,
    powerBuilding: false,
    consumption: 20,
  },
  [PowerBuildingsEnum.Biomass_Burner]: {
    name: PowerBuildingsEnum.Biomass_Burner,
    powerBuilding: true,
    consumption: 0,
  },
  [PowerBuildingsEnum.Coal_Generator]: {
    name: PowerBuildingsEnum.Coal_Generator,
    powerBuilding: true,
    consumption: 0,
  },
};
