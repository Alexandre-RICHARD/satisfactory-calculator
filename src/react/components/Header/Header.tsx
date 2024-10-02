import React from "react";
import { NavLink } from "react-router-dom";

import { LanguagesSelector } from "../LanguageSelector/LanguagesSelector";
import styles from "./Header.module.scss";

export const Header = (): React.JSX.Element => {
  return (
    <header className={styles.header}>
      <h1>Satisfactory calculator</h1>
      <NavLink to="/recipes">Recipe</NavLink>
      <NavLink to="/graph">Graph</NavLink>
      <LanguagesSelector />
    </header>
  );
};
