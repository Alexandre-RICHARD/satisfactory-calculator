import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import { TranslationsFilesEnum as TF } from "../../../enums/translationsFiles.enum";
import { useCustomTranslations } from "../../hooks/useCustomTranslations";
import { LanguagesSelector } from "../LanguageSelector";
import styles from "./styles.module.scss";

export const SideBarNavigation = (): React.JSX.Element => {
  const t = useCustomTranslations();
  const [isSideBarLarge, setIsSideBarLarge] = useState(false);

  const linkGroups = [
    [
      {
        label: t(TF.COMMON, "homepage"),
        link: "/",
      },
      {
        label: t(TF.COMMON, "recipes"),
        link: "/recipes",
      },
      {
        label: t(TF.COMMON, "calculator"),
        link: "/calculator",
      },
    ],
    [
      {
        label: t(TF.COMMON, "machines"),
        link: "/frm/allMachines",
      },
    ],
    [
      {
        label: t(TF.COMMON, "settings"),
        link: "/settings",
      },
    ],
  ];

  return (
    <aside
      className={`bg-blue-900 h-screen flex flex-col gap-6 py-6 overflow-x-hidden overflow-y-auto transition-all ease-in-out duration-250 ${isSideBarLarge ? styles.sidebar_navigation_large : styles.sidebar_navigation_small}`}
    >
      <button
        type="button"
        onClick={() => setIsSideBarLarge((prev) => !prev)}
      >
        {isSideBarLarge ? "Collapse" : "Expand"}
      </button>
      <div className="flex flex-col justify-between h-full">
        {linkGroups.map((groupLink) => (
          <div
            key={groupLink[0].link}
            className="flex flex-col"
          >
            {groupLink.map((link) => (
              <NavLink
                key={link.label}
                to={link.link}
              >
                <p className="text-center">{link.label}</p>
              </NavLink>
            ))}
          </div>
        ))}
        <LanguagesSelector />
      </div>
    </aside>
  );
};
