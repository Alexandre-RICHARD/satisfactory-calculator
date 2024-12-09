import type { EndpointEnum } from "../../../enums/endpoint.enum";
import type { GameBuildingsTypeEnum } from "../../../enums/gameBuildingsType.enum";
import type { GameItemsEnum } from "../../../enums/gameItems.enum";
import type { GameItemsCategoryEnum } from "../../../enums/gameItemsCategory.enum";

export type GameItemGeneratorBuilding = {
  name: GameItemsEnum;
  category: GameItemsCategoryEnum.Building;
  buildingType: GameBuildingsTypeEnum.Generator;
  endpoint: EndpointEnum | undefined;
};
