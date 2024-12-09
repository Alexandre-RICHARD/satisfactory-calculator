import type { CraftBuildingsEnum } from "../../enums/craftBuildings.enum";
import type { PowerBuildingsEnum } from "../../enums/powerBuildings.enum";
import type { RecipesEnum } from "../../enums/recipes.enum";
import type { ItemsInOutType } from "./itemsInOut.type";

export type RecipeType = {
  recipeName: RecipesEnum;
  craftBuildings: CraftBuildingsEnum | PowerBuildingsEnum;
  itemsIn: ItemsInOutType[];
  itemsOut: ItemsInOutType[];
  initCycleDuration: number;
  isDuplicate?: true;
  isAlternate?: true;
};
