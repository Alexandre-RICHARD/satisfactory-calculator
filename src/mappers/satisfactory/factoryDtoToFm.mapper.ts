import { enumDtoToFmMapper } from "@nexus/nexusExporter";

import { GameClassNamesEnum } from "../../enums/gameClassNames.enum";
import type { FactoryDto } from "../../types/satisfactory/apis/dataTransferObject/factoryDto.type";
import type { FactoryFm } from "../../types/satisfactory/apis/frontModel/factoryFm.type";

export const factoryDtoToFmMapper = (dto: FactoryDto[]): FactoryFm[] => {
  return dto.map((factoryDto) => {
    const className = enumDtoToFmMapper(
      factoryDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    );

    return {
      name: factoryDto.Name,
      className,
      overclocking: factoryDto.ManuSpeed,
      efficiency: factoryDto.Productivity,
      powerConsumption: factoryDto.PowerInfo.PowerConsumed,
    };
  });
};
