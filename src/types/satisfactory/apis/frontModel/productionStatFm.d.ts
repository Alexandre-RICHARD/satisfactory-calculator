import type { GameItemsEnum } from "../../../../enums/gameItems.enum";
import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";

export type ProductionStatFm = {
  name: GameItemsEnum;
  className: GameClassNamesEnum;
  currentProduction: number;
  currentConsumption: number;
  percentProduction: number;
  percentConsumption: number;
  maxProduction: number;
  maxConsumption: number;
  productionPerMinunte: string;
};
