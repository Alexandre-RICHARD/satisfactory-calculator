import type { PlayerDto } from "../../types/satisfactory/apis/dataTransferObject/playerDto.type";
import type { PlayerFm } from "../../types/satisfactory/apis/frontModel/playerFm.type";

export const playerDtoToFmMapper = (dto: PlayerDto[]): PlayerFm[] => {
  return dto.map((playerDto) => ({
    id: playerDto.ID,
    name: playerDto.Name,
  }));
};
