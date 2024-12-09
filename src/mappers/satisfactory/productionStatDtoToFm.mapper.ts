import { enumDtoToFmMapper } from "@nexus/nexusExporter";

import { gameItemsDictionnary } from "../../dictionnaries/gameItems.dictionary";
import { GameClassNamesEnum } from "../../enums/gameClassNames.enum";
import type { ProdStatsDto } from "../../types/satisfactory/apis/dataTransferObject/prodStatsDto";
import type { ProductionStatFm } from "../../types/satisfactory/apis/frontModel/productionStatFm";

export const productionStatDtoToFMapper = (
  dto: ProdStatsDto[],
): ProductionStatFm[] => {
  return dto.map((prodStatDto) => {
    const className = enumDtoToFmMapper(
      prodStatDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    );

    return {
      name: gameItemsDictionnary[className].name,
      className,
      currentProduction: prodStatDto.CurrentProd,
      currentConsumption: prodStatDto.CurrentConsumed,
      percentProduction: prodStatDto.ProdPercent,
      percentConsumption: prodStatDto.ConsPercent,
      maxProduction: prodStatDto.MaxProd,
      maxConsumption: prodStatDto.MaxConsumed,
      productionPerMinunte: prodStatDto.ProdPerMin,
    };
  });
};
