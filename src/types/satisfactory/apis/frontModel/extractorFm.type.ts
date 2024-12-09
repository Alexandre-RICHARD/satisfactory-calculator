import type { GameClassNamesEnum } from "../../../../enums/gameClassNames.enum";

export type ExtractorFm = {
  name: string;
  className: GameClassNamesEnum;
  overclocking: number;
  efficiency: number;
  powerConsumption: number;
};
