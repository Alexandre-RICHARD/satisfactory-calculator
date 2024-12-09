import { enumDtoToFmMapper } from "@nexus/nexusExporter";

import { TrainStationLoadingStatusEnum } from "../../enums/trainStationLoadingStatus.enum";
import type { TrainStationDto } from "../../types/satisfactory/apis/dataTransferObject/trainStationDto.type";
import type { TrainStationFm } from "../../types/satisfactory/apis/frontModel/trainStationFm.type";

export const trainStationDtoToFmMapper = (
  dto: TrainStationDto[],
): TrainStationFm[] => {
  return dto.map((trainStationDto) => {
    const loadingStatusDto = trainStationDto.CargoInventory?.[0].LoadingStatus;

    return {
      name: trainStationDto.Name,
      loadingStatus: loadingStatusDto
        ? enumDtoToFmMapper(
            loadingStatusDto,
            TrainStationLoadingStatusEnum,
            "TrainStationLoadingStatusEnum",
          )
        : TrainStationLoadingStatusEnum.Idle,
      location: trainStationDto.location,
    };
  });
};
