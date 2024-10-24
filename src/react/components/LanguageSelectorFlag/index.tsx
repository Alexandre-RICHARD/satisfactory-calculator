import { type CountryEnum, dynamicImageImporter } from "@nexus/nexusExporter";
import React from "react";

type PropsType = {
  country: CountryEnum;
};

export const LanguageSelectorFlag = ({
  country,
}: PropsType): React.JSX.Element => {
  return (
    <img
      alt={`Country flag of ${country}`}
      src={dynamicImageImporter(`languagesFlags/${country}.png`)}
    />
  );
};
