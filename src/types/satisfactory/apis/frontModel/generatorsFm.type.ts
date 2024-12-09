import type { GameClassNamesEnum } from "../../../../enums/gameClassNames.enum";

export type GeneratorFm = {
  name: string;
  className: GameClassNamesEnum;
  overclocking: number;
  isAtFullSpeed: boolean;
  powerProduction: number;
};
