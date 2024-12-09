import { buildings } from "../dictionnaries/buildings.dictionnary";
import type { RecipeType } from "../types/satisfactory/recipe.type";

type Args = {
  recipe: RecipeType;
  overclocking: number;
};

export const powerCalculation = ({ recipe, overclocking }: Args) => {
  const cycleDuration = recipe.initCycleDuration / (overclocking / 100);
  const requiredPower =
    buildings[recipe.craftBuildings].consumption *
    (overclocking / 100) ** 1.321928;
  const requiredEnergy = requiredPower * cycleDuration;

  return {
    cycleDuration,
    requiredPower,
    requiredEnergy,
  };
};
