import type { GameClassNamesEnum } from "../../../enums/gameClassNames.enum";
import type { GameItemsEnum } from "../../../enums/gameItems.enum";
import type { GameItemsCategoryEnum } from "../../../enums/gameItemsCategory.enum";

export type GameItemEquipment = {
  className: GameClassNamesEnum;
  name: GameItemsEnum;
  category: GameItemsCategoryEnum.Equipment;
};
