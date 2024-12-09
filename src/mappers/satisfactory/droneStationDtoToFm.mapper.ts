import { enumDtoToFmMapper } from "@nexus/nexusExporter";

import { DroneStationStatusEnum } from "../../enums/droneStationStatus.enum";
import type { DroneStationDto } from "../../types/satisfactory/apis/dataTransferObject/droneStationDto.type";
import type { DroneStationFm } from "../../types/satisfactory/apis/frontModel/droneStationFm.type";

export const droneStationDtoToFmMapper = (
  dto: DroneStationDto[],
): DroneStationFm[] => {
  return dto.map((droneStationDto) => ({
    name: droneStationDto.Name,
    droneStatus: enumDtoToFmMapper(
      droneStationDto.DroneStatus,
      DroneStationStatusEnum,
      "DroneStationStatusEnum",
    ),
    totalTransportRateEstimation: droneStationDto.EstTotalTransRate,
    activeFuel: {
      fuelCostRateEstimation: droneStationDto.ActiveFuel.EstimatedFuelCostRate,
    },
    latestRoundTrip: droneStationDto.LatestRndTrip,
    averageRoundTrip: droneStationDto.AvgRndTrip,
  }));
};
