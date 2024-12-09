import type { GameItemDefault } from "./default.type";
import type { GameItemEquipment } from "./equipement.type";
import type { GameItemGeneratorBuilding } from "./generatorBuilding.type";
import type { GameItemManufacturerBuilding } from "./manufacturerBuilding.type";
import type { GameItemOtherBuilding } from "./otherBuilding.type";
import type { GameItemResource } from "./resource.type";
import type { GameItemVehicle } from "./vehicle.type";

export type GameItems =
  | GameItemDefault
  | GameItemResource
  | GameItemGeneratorBuilding
  | GameItemManufacturerBuilding
  | GameItemOtherBuilding
  | GameItemEquipment
  | GameItemVehicle;
