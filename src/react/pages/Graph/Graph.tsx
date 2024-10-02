import React, { useState } from "react";

import { Selector } from "../../../../nexus/src/nexusExporter";
import { recipes } from "../../../dictionnaries/recipes.dictionnary";
import { ItemsEnum } from "../../../enums/items.enum";
import { Recipe } from "../../components/Recipe/Recipe";
import styles from "./Graph.module.scss";

export const Graph = (): React.JSX.Element => {
  const [resourceSelected, setResourceSelected] = useState<string>();
  const [recipeSelected, setRecipeSelected] = useState<string>();

  const ItemsThatCanBeCrafted = Object.values(ItemsEnum).filter((item) => {
    return recipes.some((recipe) =>
      recipe.itemsOut.some((itemOut) => itemOut.itemName === item),
    );
  });

  const recipeThatCanBeDoWithItemInOutput = recipes.filter((recipe) =>
    recipe.itemsOut.some((itemOut) => itemOut.itemName === resourceSelected),
  );

  return (
    <div className={styles.graph}>
      <Selector
        id="satisfactory-calculator-resources-selector"
        position="bottom-right"
        label="Selectionnes ta ressource"
        selectedItem={resourceSelected}
        items={ItemsThatCanBeCrafted.map((item) => ({
          label: item,
          search: item,
          value: item,
        }))}
        onSelect={setResourceSelected}
        search={{
          isHandlingCustomSearch: false,
          strictMode: false,
        }}
      />
      <p>{resourceSelected}</p>
      {resourceSelected ? (
        <Selector
          id="satisfactory-calculator-recipe-selector"
          position="bottom-right"
          label="Selectionnes la recette"
          selectedItem={recipeSelected}
          items={recipeThatCanBeDoWithItemInOutput.map((recipe) => ({
            label: recipe.recipeName,
            search: recipe.recipeName,
            value: recipe.recipeName,
          }))}
          onSelect={setRecipeSelected}
        />
      ) : null}
      {recipeSelected ? (
        <Recipe
          recipe={
            recipes.find((recipe) => recipe.recipeName === recipeSelected)!
          }
        />
      ) : null}
    </div>
  );
};
