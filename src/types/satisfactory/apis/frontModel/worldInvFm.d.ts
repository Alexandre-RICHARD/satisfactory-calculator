import type { GameItemsEnum } from "../../../../enums/gameItems.enum";
import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";

export type WorldInvFm = {
  name: GameItemsEnum;
  className: GameClassNamesEnum;
  amount: number;
};
