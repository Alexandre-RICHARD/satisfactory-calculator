import { gameItemsDictionnary } from "../dictionnaries/gameItems.dictionary";
import type { GameClassNamesEnum } from "../enums/gameClassNames.enum";

export const getImageHelper = (className: GameClassNamesEnum): string => {
  const item = gameItemsDictionnary[className];
  if (!item) return `/assets/Icon/Not_Found.png`;
  return `/assets/${item.category}/${item.name}.png`;
};
