import type { GameClassNamesEnum } from "../../../../enums/gameClassNames.enum";

export type FactoryFm = {
  name: string;
  className: GameClassNamesEnum;
  overclocking: number;
  efficiency: number;
  powerConsumption: number;
};
