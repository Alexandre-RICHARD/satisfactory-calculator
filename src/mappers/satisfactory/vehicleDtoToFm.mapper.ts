import { enumDtoToFmMapper } from "@nexus/nexusExporter";

import { gameItemsDictionnary } from "../../dictionnaries/gameItems.dictionary";
import { GameClassNamesEnum } from "../../enums/gameClassNames.enum";
import type { VehicleDto } from "../../types/satisfactory/apis/dataTransferObject/vehicleDto.type";
import type { VehicleFm } from "../../types/satisfactory/apis/frontModel/vehicleFm.type";

export const vehicleDtoToFmMapper = (dto: VehicleDto[]): VehicleFm[] => {
  return dto.map((vehicleDto) => {
    const vehicleClassName = enumDtoToFmMapper(
      vehicleDto.ClassName,
      GameClassNamesEnum,
      "GameClassNamesEnum",
    );

    return {
      id: vehicleDto.ID,
      name: gameItemsDictionnary[vehicleClassName].name,
      className: vehicleClassName,
      autopilot: vehicleDto.Autopilot,
      speed: vehicleDto.ForwardSpeed,
      airborne: vehicleDto.Airborne,
      currentGear: vehicleDto.CurrentGear,
      engineRPM: vehicleDto.EngineRPM,
      fuel: vehicleDto?.FuelInventory?.flatMap((inventory) => {
        if (!inventory) return [];
        return {
          name: gameItemsDictionnary[
            enumDtoToFmMapper(
              inventory.ClassName,
              GameClassNamesEnum,
              "GameClassNamesEnum",
            )
          ].name,
          className: enumDtoToFmMapper(
            inventory?.ClassName,
            GameClassNamesEnum,
            "GameClassNamesEnum",
          ),
          amount: inventory?.Amount,
        };
      }),
    };
  });
};
