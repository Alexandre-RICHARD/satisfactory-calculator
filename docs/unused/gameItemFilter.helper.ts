import { GameBuildingsTypeEnum } from "../../src/enums/gameBuildingsType.enum";
import type { GameClassNamesEnum } from "../../src/enums/gameClassNames.enum";
import { GameItemsCategoryEnum } from "../../src/enums/gameItemsCategory.enum";
import type { GameItems } from "../../src/types/satisfactory/gameItems/gameItems.type";
import type { GameItemGeneratorBuilding } from "../../src/types/satisfactory/gameItems/generatorBuilding.type";
import type { GameItemManufacturerBuilding } from "../../src/types/satisfactory/gameItems/manufacturerBuilding.type";
import type { GameItemsDictionnary } from "../../src/types/satisfactory/gameItemsDictionary.type";

type Args = {
  gameItemsDictionnary: GameItemsDictionnary;
  filter: GameItemsCategoryEnum | "generatorsWithEndpoint" | "factories";
};

export const gameItemFilterHelper = ({
  gameItemsDictionnary,
  filter,
}: Args): [GameClassNamesEnum, GameItems][] => {
  const filteredArray = Object.entries(gameItemsDictionnary) as [
    GameClassNamesEnum,
    GameItems,
  ][];
  switch (filter) {
    case GameItemsCategoryEnum.Resource: {
      return filteredArray.filter(
        ([, item]) => item.category === GameItemsCategoryEnum.Resource,
      );
    }
    case "generatorsWithEndpoint":
      return filteredArray.filter(([, item]) => {
        const buildingItem = item as GameItemGeneratorBuilding;
        return (
          buildingItem.category === GameItemsCategoryEnum.Building &&
          buildingItem.buildingType === GameBuildingsTypeEnum.Generator &&
          !!buildingItem.endpoint
        );
      });
    case "factories":
      return filteredArray.filter(([, item]) => {
        const buildingItem = item as GameItemManufacturerBuilding;
        return (
          buildingItem.category === GameItemsCategoryEnum.Building &&
          buildingItem.buildingType === GameBuildingsTypeEnum.Manufacturer
        );
      });
    default:
      return filteredArray;
  }
};
