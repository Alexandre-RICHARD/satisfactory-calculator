import type { PowerDto } from "../../types/satisfactory/apis/dataTransferObject/powerDto.type";
import type { PowerFm } from "../../types/satisfactory/apis/frontModel/powerFm.type";

export const powerDtoToFmMapper = (dto: PowerDto[]): PowerFm[] => {
  return dto.map((powerDto) => ({
    id: powerDto.CircuitGroupID,
    powerCapacity: powerDto.PowerCapacity,
    powerConsumed: powerDto.PowerConsumed,
    powerMaxConsumed: powerDto.PowerMaxConsumed,
    powerProduction: powerDto.PowerProduction,
    batteryCapacity: powerDto.BatteryCapacity,
    batteryTimeFull: powerDto.BatteryTimeFull,
    batteryTimeEmpty: powerDto.BatteryTimeEmpty,
    batteryPercent: powerDto.BatteryPercent,
    batteryDifferential: powerDto.BatteryDifferential,
    fuseTriggered: powerDto.FuseTriggered,
  }));
};
