import type { ItemsEnum } from "../enums/items.enum";
import type { FactoryLine } from "../types/satisfactory/factoryLine.type";
import type { FactoryLineData } from "../types/satisfactory/factoryLineData.type";
import type { InitialRawResource } from "../types/satisfactory/initialRawResource.type";

export const factoryLineDataCalculator = (
  factoryLine: FactoryLine,
): FactoryLineData => {
  let totalEnergyRequired = 0;
  let totalPowerRequired = 0;
  const rawResources: Partial<Record<ItemsEnum, InitialRawResource>> = {};

  const endItemQuantityWanted = factoryLine.quantityPerMinute;

  const getInfo = (step: FactoryLine) => {
    totalEnergyRequired +=
      (step.energyRequired * step.quantityPerMinute) / endItemQuantityWanted;
    totalPowerRequired += step.powerRequired;
    if (step.rawResources) {
      step.rawResources.forEach((rawResource) => {
        const currentRawResource = rawResources[rawResource.itemName];
        if (currentRawResource) {
          rawResources[rawResource.itemName] = {
            ...currentRawResource,
            quantityPerMinute:
              currentRawResource.quantityPerMinute +
              rawResource.quantityPerMinute,
          };
        } else {
          rawResources[rawResource.itemName] = {
            itemName: rawResource.itemName,
            quantityPerMinute: rawResource.quantityPerMinute,
          };
        }
      });
    }
    if (step.parents.length) step.parents.forEach((parent) => getInfo(parent));
  };

  getInfo(factoryLine);

  return {
    totalEnergyRequired,
    totalPowerRequired,
    rawResources: Object.values(rawResources),
  };
};
