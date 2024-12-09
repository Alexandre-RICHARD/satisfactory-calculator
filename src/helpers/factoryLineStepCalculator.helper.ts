import { roundNumber } from "@nexus/nexusExporter";

import { items } from "../dictionnaries/items.dictionnary";
import { recipes } from "../dictionnaries/recipes.dictionnary";
import type { FactoryLine } from "../types/satisfactory/factoryLine.type";
import type { SelectedFactoryLineData } from "../types/satisfactory/selectedFactoryLineData.type";
import { itemPerMinute } from "./itemPerMinute.helper";
import { powerCalculation } from "./powerCalculation.helper";

type Args = {
  currentRecipe: SelectedFactoryLineData;
};

export const factoryLineStepCalculator = ({
  currentRecipe,
}: Args): FactoryLine => {
  const recipe = recipes.find(
    (it) => it.recipeName === currentRecipe?.selectedRecipeName,
  )!;

  const item = recipe.itemsOut.find(
    (it) => it.itemName === currentRecipe?.selectedItemName,
  )!;

  const quantityPerMinute =
    currentRecipe?.itemPerMinute ?? item.quantityPerCycle;
  const initialQuantityPerMinute = itemPerMinute({
    cycleDuration: recipe.initCycleDuration,
    cycleItemCount: item.quantityPerCycle,
  });
  const buildingNumber = Math.ceil(
    quantityPerMinute / initialQuantityPerMinute,
  );
  const overclocking = roundNumber(
    (currentRecipe.itemPerMinute! /
      (buildingNumber * initialQuantityPerMinute)) *
      100,
    2,
    "ceil",
  );

  const { requiredEnergy, requiredPower } = powerCalculation({
    recipe,
    overclocking,
  });

  const isStartingStep = recipe.itemsIn.every(
    (itemIn) => items[itemIn.itemName].isRaw,
  );
  const parents = isStartingStep
    ? []
    : recipe.itemsIn
        .filter((itemIn) => !items[itemIn.itemName].isRaw)
        .map((itemIn) => {
          const itemInRecipe = recipes.find(
            (it) =>
              !it.isAlternate &&
              it.itemsOut.some(
                (itemOut) => itemOut.itemName === itemIn.itemName,
              ),
          );
          return factoryLineStepCalculator({
            currentRecipe: {
              itemPerMinute:
                (itemIn.quantityPerCycle * quantityPerMinute) /
                item.quantityPerCycle,
              selectedItemName: itemIn.itemName,
              selectedRecipeName: itemInRecipe?.recipeName,
            },
          });
        });

  const rawResources = isStartingStep
    ? recipe.itemsIn.map((itemIn) => ({
        itemName: itemIn.itemName,
        quantityPerMinute:
          (itemIn.quantityPerCycle * quantityPerMinute) / item.quantityPerCycle,
      }))
    : [];

  return {
    recipe,
    id: crypto.randomUUID(),
    quantityPerMinute,
    buildingNumber,
    overclocking,
    powerRequired: requiredPower * buildingNumber,
    energyRequired: requiredEnergy,
    isStartingStep,
    parents,
    rawResources,
  };
};
