import React from "react";

import { EndpointEnum } from "../../../enums/endpoint.enum";
import type { ExtractorDto } from "../../../types/satisfactory/apis/dataTransferObject/extractorDto.type";
import type { FactoryDto } from "../../../types/satisfactory/apis/dataTransferObject/factoryDto.type";
import type { GeneratorDto } from "../../../types/satisfactory/apis/dataTransferObject/generatorsDto.type";
import type { ExtractorFm } from "../../../types/satisfactory/apis/frontModel/extractorFm.type";
import type { FactoryFm } from "../../../types/satisfactory/apis/frontModel/factoryFm.type";
import type { GeneratorFm } from "../../../types/satisfactory/apis/frontModel/generatorsFm.type";
import { useAutoRefetch } from "../../hooks/useAutoRefetch";

export const FRMAllMachines = (): React.JSX.Element => {
  const { data: extractors } = useAutoRefetch<ExtractorDto[], ExtractorFm[]>(
    EndpointEnum.EXTRACTOR,
  );
  const { data: factories } = useAutoRefetch<FactoryDto[], FactoryFm[]>(
    EndpointEnum.FACTORY,
  );
  const { data: generators } = useAutoRefetch<GeneratorDto[], GeneratorFm[]>(
    EndpointEnum.GENERATOR,
  );

  const allData = [
    ...(extractors ?? []),
    ...(factories ?? []),
    ...(generators ?? []),
  ];

  console.log(allData);

  return <div>machines</div>;
};
