import { enumDtoToFmMapper } from "@nexus/nexusExporter";

import { DroneFlyingModeEnum } from "../../enums/droneFlyingMode.enum";
import type { DroneDto } from "../../types/satisfactory/apis/dataTransferObject/droneDto.type";
import type { DroneFm } from "../../types/satisfactory/apis/frontModel/droneFm.type";

export const droneDtoToFmMapper = (dto: DroneDto[]): DroneFm[] => {
  return dto.map((droneDto) => ({
    id: droneDto.ID,
    homeStation: droneDto.HomeStation,
    pairedStation: droneDto.PairedStation,
    currentDestination: droneDto.CurrentDestination,
    currentFlyingMode: enumDtoToFmMapper(
      droneDto.CurrentFlyingMode,
      DroneFlyingModeEnum,
      "DroneFlyingModeEnum",
    ),
    flyingSpeed: droneDto.FlyingSpeed,
    location: {
      x: droneDto.location.x,
      y: droneDto.location.y,
      z: droneDto.location.z,
    },
  }));
};
