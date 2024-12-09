import { EndpointEnum } from "../enums/endpoint.enum";
import { awesomeSinkDtoToFmMapper } from "../mappers/satisfactory/awesomeSinkDtoToFm.mapper";
import { droneDtoToFmMapper } from "../mappers/satisfactory/droneDtoToFm.mapper";
import { droneStationDtoToFmMapper } from "../mappers/satisfactory/droneStationDtoToFm.mapper";
import { factoryDtoToFmMapper } from "../mappers/satisfactory/factoryDtoToFm.mapper";
import { generatorsDtoToFmMapper } from "../mappers/satisfactory/generatorsDtoToFm.mapper";
import { playerDtoToFmMapper } from "../mappers/satisfactory/playerDtoToFm.mapper";
import { powerDtoToFmMapper } from "../mappers/satisfactory/powerDtoToFm.mapper";
import { productionStatDtoToFMapper } from "../mappers/satisfactory/productionStatDtoToFm.mapper";
import { trainDtoToFmMapper } from "../mappers/satisfactory/trainDtoToFm.mapper";
import { trainStationDtoToFmMapper } from "../mappers/satisfactory/trainStationDtoToFm.mapper";
import { vehicleDtoToFmMapper } from "../mappers/satisfactory/vehicleDtoToFm.mapper";
import { worldInvDtoToFmMapper } from "../mappers/satisfactory/worldInvDtoToFm.mapper";
import type { EndPoint } from "../types/satisfactory/endpoint";

export const endPointDictionnary: EndPoint = {
  [EndpointEnum.ASSEMBLER]: factoryDtoToFmMapper,
  [EndpointEnum.AWESOME_SINK_EXPLORATION]: awesomeSinkDtoToFmMapper,
  [EndpointEnum.AWESOME_SINK_RESOURCE]: awesomeSinkDtoToFmMapper,
  [EndpointEnum.BIOMASS_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.BLENDER]: factoryDtoToFmMapper,
  [EndpointEnum.COAL_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.CONSTRUCTOR]: factoryDtoToFmMapper,
  [EndpointEnum.CONVERTER]: factoryDtoToFmMapper,
  [EndpointEnum.DRONE]: droneDtoToFmMapper,
  [EndpointEnum.DRONE_STATION]: droneStationDtoToFmMapper,
  [EndpointEnum.FOUNDRY]: factoryDtoToFmMapper,
  [EndpointEnum.FUEL_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.GEOTHERMAL_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.MANUFACTURER]: factoryDtoToFmMapper,
  [EndpointEnum.NUCLEAR_GENERATOR]: generatorsDtoToFmMapper,
  [EndpointEnum.PACKAGER]: factoryDtoToFmMapper,
  [EndpointEnum.PARTICLE_ACCELERATOR]: factoryDtoToFmMapper,
  [EndpointEnum.PLAYER]: playerDtoToFmMapper,
  [EndpointEnum.POWER]: powerDtoToFmMapper,
  [EndpointEnum.PRODUCTION_STAT]: productionStatDtoToFMapper,
  [EndpointEnum.QUANTUM_ENCODER]: factoryDtoToFmMapper,
  [EndpointEnum.REFINERY]: factoryDtoToFmMapper,
  [EndpointEnum.SMELTER]: factoryDtoToFmMapper,
  [EndpointEnum.TRAIN]: trainDtoToFmMapper,
  [EndpointEnum.TRAIN_STATION]: trainStationDtoToFmMapper,
  [EndpointEnum.VEHICLE]: vehicleDtoToFmMapper,
  [EndpointEnum.WORLD_INV]: worldInvDtoToFmMapper,
};
