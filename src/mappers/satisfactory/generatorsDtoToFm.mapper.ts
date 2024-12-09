import { enumDtoToFmMapper } from "@nexus/nexusExporter";

import { GameClassNamesEnum } from "../../enums/gameClassNames.enum";
import type { GeneratorDto } from "../../types/satisfactory/apis/dataTransferObject/generatorsDto";
import type { GeothermalGeneratorDto } from "../../types/satisfactory/apis/dataTransferObject/geothermalGeneratorDto";
import type { GeneratorFm } from "../../types/satisfactory/apis/frontModel/generatorsFm";

export const generatorsDtoToFmMapper = (
  dto: GeneratorDto[] | GeothermalGeneratorDto[],
): GeneratorFm[] => {
  return dto.map((generatorDto) => ({
    id: crypto.randomUUID(),
    className: enumDtoToFmMapper(
      generatorDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    ),
    isFullSpeed: generatorDto.IsFullSpeed,
    isGeneratorCanStart: generatorDto.CanStart,
    dynamicProductionCapacity: generatorDto.DynamicProdCapacity,
  }));
};
