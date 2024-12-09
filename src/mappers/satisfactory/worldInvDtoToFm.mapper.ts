import { enumDtoToFmMapper } from "@nexus/nexusExporter";

import { gameItemsDictionnary } from "../../dictionnaries/gameItems.dictionary";
import { GameClassNamesEnum } from "../../enums/gameClassNames.enum";
import type { WorldInvDto } from "../../types/satisfactory/apis/dataTransferObject/worldInvDto.type";
import type { WorldInvFm } from "../../types/satisfactory/apis/frontModel/worldInvFm.type";

export const worldInvDtoToFmMapper = (dto: WorldInvDto[]): WorldInvFm[] => {
  return dto.map((worldInvDto) => {
    const className = enumDtoToFmMapper(
      worldInvDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    );

    return {
      name: gameItemsDictionnary[className].name,
      className,
      amount: worldInvDto.Amount,
    };
  });
};
