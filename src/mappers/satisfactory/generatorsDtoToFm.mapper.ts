import { enumDtoToFmMapper } from "@nexus/nexusExporter";

import { GameClassNamesEnum } from "../../enums/gameClassNames.enum";
import type { GeneratorDto } from "../../types/satisfactory/apis/dataTransferObject/generatorsDto.type";
import type { GeneratorFm } from "../../types/satisfactory/apis/frontModel/generatorsFm.type";

export const generatorsDtoToFmMapper = (dto: GeneratorDto[]): GeneratorFm[] => {
  return dto.map((generatorDto) => {
    const className = enumDtoToFmMapper(
      generatorDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    );

    return {
      name: generatorDto.Name,
      className,
      overclocking: generatorDto.CurrentPotential,
      isAtFullSpeed: generatorDto.IsFullSpeed,
      powerProduction: generatorDto.DynamicProdCapacity,
    };
  });
};
