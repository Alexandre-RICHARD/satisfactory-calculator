import type { GameItemsEnum } from "../../../../enums/gameItems.enum";
import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";

export type VehicleFm = {
  id: string;
  className: GameClassNamesEnum;
  name: GameItemsEnum;
  autopilot: boolean;
  speed: number;
  airborne: boolean;
  engineRPM: number;
  currentGear: number;
  fuel?: {
    name: GameItemsEnum;
    className: GameClassNamesEnum;
    amount: number;
  }[];
};
