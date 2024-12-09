import { CraftBuildingsEnum } from "../enums/craftBuildings.enum";
import { ItemsEnum } from "../enums/items.enum";
import { RecipesEnum } from "../enums/recipes.enum";
import type { RecipeType } from "../types/satisfactory/recipe.type";

// TODO A => POur trouver les doublons, on va attendre de finir le jeu pour voir ça
// const doubleOutputRecipes = recipes
//   .filter((recipe) => {
//     return recipe.itemsOut.length >= 2;
//   })
//   .sort((a, b) =>
//     a.itemsOut[1].itemName.localeCompare(b.itemsOut[1].itemName),
//   )
//   .sort((a, b) =>
//     a.itemsOut[0].itemName.localeCompare(b.itemsOut[0].itemName),
//   );

export const recipes: RecipeType[] = [
  //! Iron_Ingot
  {
    recipeName: RecipesEnum.Iron_Ingot,
    craftBuildings: CraftBuildingsEnum.Smelter,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ore,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  //! Iron_Plate
  {
    recipeName: RecipesEnum.Iron_Plate,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  //! Iron_Rod
  {
    recipeName: RecipesEnum.Iron_Rod,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Reinforced_Iron_Plate
  {
    recipeName: RecipesEnum.Reinforced_Iron_Plate,
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Plate,
        quantityPerCycle: 6,
      },
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  //! Cable
  {
    recipeName: RecipesEnum.Cable,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Cable,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  //! Wire
  {
    recipeName: RecipesEnum.Wire,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Wire,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 4,
  },
  //! Copper_Ingot
  {
    recipeName: RecipesEnum.Copper_Ingot,
    craftBuildings: CraftBuildingsEnum.Smelter,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ore,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 2,
  },
  //! Concrete
  {
    recipeName: RecipesEnum.Concrete,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Limestone,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Concrete,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Screw
  {
    recipeName: RecipesEnum.Screw,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 6,
  },
  //! Biomass_Wood
  {
    recipeName: RecipesEnum.Biomass_Wood,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Wood,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 20,
      },
    ],
    initCycleDuration: 4,
  },
  //! Biomass_Leaves
  {
    recipeName: RecipesEnum.Biomass_Leaves,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Leaves,
        quantityPerCycle: 10,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 5,
  },
  //! Biomass_Alien_Protein
  {
    recipeName: RecipesEnum.Biomass_Alien_Protein,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 100,
      },
    ],
    initCycleDuration: 4,
  },
  //! Rotor
  {
    recipeName: RecipesEnum.Rotor,
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Screw,
        quantityPerCycle: 25,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 15,
  },
  //! Copper_Sheet
  {
    recipeName: RecipesEnum.Copper_Sheet,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Ingot,
        quantityPerCycle: 2,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  //! Modular_Frame
  {
    recipeName: RecipesEnum.Modular_Frame,
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Modular_Frame,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 60,
  },
  //! Smart_Plating
  {
    recipeName: RecipesEnum.Smart_Plating,
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Reinforced_Iron_Plate,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Rotor,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Smart_Plating,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 30,
  },
  //! Alien_Protein_Hog
  {
    recipeName: RecipesEnum.Alien_Protein_Hog,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Hog_Remains,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Alien_Protein_Hatcher
  {
    recipeName: RecipesEnum.Alien_Protein_Hatcher,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Hatcher_Remains,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Alien_Protein_Spitter
  {
    recipeName: RecipesEnum.Alien_Protein_Spitter,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Spitter_Remains,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Alien_Protein_Stinger
  {
    recipeName: RecipesEnum.Alien_Protein_Stinger,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Stinger_Remains,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 3,
  },
  //! Alien_DNA_Capsule
  {
    recipeName: RecipesEnum.Alien_DNA_Capsule,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Alien_Protein,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Alien_DNA_Capsule,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  //! Power_Shard_Blue_Power_Slug
  {
    recipeName: RecipesEnum.Power_Shard_Blue_Power_Slug,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Blue_Power_Slug,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Power_Shard,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 8,
  },
  //! Power_Shard_Yellow_Power_Slug
  {
    recipeName: RecipesEnum.Power_Shard_Yellow_Power_Slug,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Yellow_Power_Slug,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Power_Shard,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 12,
  },
  //! Power_Shard_Purple_Power_Slug
  {
    recipeName: RecipesEnum.Power_Shard_Purple_Power_Slug,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Purple_Power_Slug,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Power_Shard,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 24,
  },
  //! Caterium_Ingot
  {
    recipeName: RecipesEnum.Caterium_Ingot,
    craftBuildings: CraftBuildingsEnum.Smelter,
    itemsIn: [
      {
        itemName: ItemsEnum.Caterium_Ore,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Caterium_Ingot,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Quartz_Crystal
  {
    recipeName: RecipesEnum.Quartz_Crystal,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Raw_Quartz,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Quartz_Crystal,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 8,
  },
  //! Solid_Biofuel
  {
    recipeName: RecipesEnum.Solid_Biofuel,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Biomass,
        quantityPerCycle: 8,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Solid_Biofuel,
        quantityPerCycle: 4,
      },
    ],
    initCycleDuration: 4,
  },
  //! Iron_Rebar
  {
    recipeName: RecipesEnum.Iron_Rebar,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rod,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Iron_Rebar,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Silica
  {
    recipeName: RecipesEnum.Silica,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Raw_Quartz,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Silica,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 8,
  },
  //! Shatter_Rebar
  {
    recipeName: RecipesEnum.Shatter_Rebar,
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rebar,
        quantityPerCycle: 2,
      },
      {
        itemName: ItemsEnum.Quartz_Crystal,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Shatter_Rebar,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
  //! Steel_Ingot
  {
    recipeName: RecipesEnum.Steel_Ingot,
    craftBuildings: CraftBuildingsEnum.Foundry,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Ore,
        quantityPerCycle: 3,
      },
      {
        itemName: ItemsEnum.Coal,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 3,
      },
    ],
    initCycleDuration: 4,
  },
  //! Steel_Beam
  {
    recipeName: RecipesEnum.Steel_Beam,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 4,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Steel_Beam,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 4,
  },
  //! Steel_Pipe
  {
    recipeName: RecipesEnum.Steel_Pipe,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Steel_Ingot,
        quantityPerCycle: 3,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Steel_Pipe,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 6,
  },
  //! Versatile_Framework
  {
    recipeName: RecipesEnum.Versatile_Framework,
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Modular_Frame,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Steel_Beam,
        quantityPerCycle: 12,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Versatile_Framework,
        quantityPerCycle: 2,
      },
    ],
    initCycleDuration: 24,
  },
  //! Quickwire
  {
    recipeName: RecipesEnum.Quickwire,
    craftBuildings: CraftBuildingsEnum.Constructor,
    itemsIn: [
      {
        itemName: ItemsEnum.Caterium_Ingot,
        quantityPerCycle: 1,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 5,
      },
    ],
    initCycleDuration: 5,
  },
  //! Stun_Rebar
  {
    recipeName: RecipesEnum.Stun_Rebar,
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Iron_Rebar,
        quantityPerCycle: 1,
      },
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 5,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.Stun_Rebar,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 6,
  },
  //! AI_Limiter
  {
    recipeName: RecipesEnum.AI_Limiter,
    craftBuildings: CraftBuildingsEnum.Assembler,
    itemsIn: [
      {
        itemName: ItemsEnum.Copper_Sheet,
        quantityPerCycle: 5,
      },
      {
        itemName: ItemsEnum.Quickwire,
        quantityPerCycle: 20,
      },
    ],
    itemsOut: [
      {
        itemName: ItemsEnum.AI_Limiter,
        quantityPerCycle: 1,
      },
    ],
    initCycleDuration: 12,
  },
];
