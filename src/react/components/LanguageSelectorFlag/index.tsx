import { dynamicAssetsImporterHelper } from "@nexus/helpers/media/image/dynamicAssetsImporter.helper";
import { type CountryEnum } from "@nexus/nexusExporter";
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
      src={dynamicAssetsImporterHelper(`images/languagesFlags/${country}.png`)}
    />
  );
};
