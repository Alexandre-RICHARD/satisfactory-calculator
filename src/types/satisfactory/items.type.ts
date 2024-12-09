import type { ItemsEnum } from "../../enums/items.enum";

export type ItemsType = {
  name: ItemsEnum;
  isRaw?: true;
  isLiquid?: true;
};
