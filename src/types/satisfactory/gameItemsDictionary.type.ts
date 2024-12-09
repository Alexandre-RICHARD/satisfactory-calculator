import type { GameClassNamesEnum } from "../../enums/gameClassNames.enum";
import type { GameItems } from "./gameItems/gameItems.type";

export type GameItemsDictionnary = Record<GameClassNamesEnum, GameItems>;
