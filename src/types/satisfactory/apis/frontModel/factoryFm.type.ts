import type { GameClassNamesEnum } from "../../../../enums/gameClassNames.enum";
import type { RecipeItemFm } from "./recipeItemFm.type";

export type FactoryFm = {
  id: string;
  name: string;
  className: GameClassNamesEnum;
  isConfigured: boolean;
  isProducing: boolean;
  recipe: string;
  ingredients: RecipeItemFm[];
  products: RecipeItemFm[];
  clockSpeed: number;
};
