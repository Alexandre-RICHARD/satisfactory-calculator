import type { ItemsEnum } from "../../enums/items.enum";
import type { RecipesEnum } from "../../enums/recipes.enum";

export type SelectedFactoryLineData = {
  selectedItemName?: ItemsEnum;
  selectedRecipeName?: RecipesEnum;
  itemPerMinute?: number;
};
