export enum ItemsEnum {
  AI_Limiter = "AI_Limiter",
  Alien_DNA_Capsule = "Alien_DNA_Capsule",
  Alien_Protein = "Alien_Protein",
  Biomass = "Biomass",
  Blue_Power_Slug = "Blue_Power_Slug",
  Cable = "Cable",
  Caterium_Ingot = "Caterium_Ingot",
  Caterium_Ore = "Caterium_Ore",
  Coal = "Coal",
  Concrete = "Concrete",
  Copper_Ingot = "Copper_Ingot",
  Copper_Ore = "Copper_Ore",
  Copper_Sheet = "Copper_Sheet",
  Hatcher_Remains = "Hatcher_Remains",
  Hog_Remains = "Hog_Remains",
  Iron_Ingot = "Iron_Ingot",
  Iron_Ore = "Iron_Ore",
  Iron_Plate = "Iron_Plate",
  Iron_Rebar = "Iron_Rebar",
  Iron_Rod = "Iron_Rod",
  Leaves = "Leaves",
  Limestone = "Limestone",
  Modular_Frame = "Modular_Frame",
  Power_Shard = "Power_Shard",
  Purple_Power_Slug = "Purple_Power_Slug",
  Quartz_Crystal = "Quartz_Crystal",
  Quickwire = "Quickwire",
  Raw_Quartz = "Raw_Quartz",
  Reinforced_Iron_Plate = "Reinforced_Iron_Plate",
  Rotor = "Rotor",
  Screw = "Screw",
  Shatter_Rebar = "Shatter_Rebar",
  Silica = "Silica",
  Smart_Plating = "Smart_Plating",
  Solid_Biofuel = "Solid_Biofuel",
  Spitter_Remains = "Spitter_Remains",
  Steel_Beam = "Steel_Beam",
  Steel_Ingot = "Steel_Ingot",
  Steel_Pipe = "Steel_Pipe",
  Stinger_Remains = "Stinger_Remains",
  Stun_Rebar = "Stun_Rebar",
  Versatile_Framework = "Versatile_Framework",
  Wire = "Wire",
  Wood = "Wood",
  Yellow_Power_Slug = "Yellow_Power_Slug",

  // TODO
  // Crystal_Oscillator = "Crystal_Oscillator",
  // Bauxite = "Bauxite",
  // Uranium = "Uranium",
  // Sulfur = "Sulfur",
  // Water = "Water",
  // Crude_Oil = "Crude_Oil",
  // Nitrogen_Gas = "Nitrogen_Gas",
  // Mycelia = "Mycelia",
  // Flowers_Petals = "Flowers_Petals",
  // Beacon = "Beacon", // Peut être craft même si équipement
  // Uranium_Waste = "Uranium_Waste",
  // Plutonium_Waste = "Plutonium_Waste", // On ne peut rien en faire
  // High_Speed_Connector = "High_Speed_Connector",
  // Supercomputer = "Supercomputer",
  // Homing_Rifle_Ammo = "Homing_Rifle_Ammo",
  // Color_Cartridge = "Color_Cartridge",
  // Fabric = "Fabric",
  // Gas_Nobelisk = "Gas_Nobelisk",
  // Radio_Control_Unit = "Radio_Control_Unit",
  // Pulse_Nobelisk = "Pulse_Nobelisk",
  // Black_Powder = "Black_Powder",
  // Smokeless_Powder = "Smokeless_Powder",
  // Cluster_Nobelisk = "Cluster_Nobelisk",
  // Nobelisk = "Nobelisk",
  // Rifle_Ammo = "Rifle_Ammo",
  // Explosive_Rebar = "Explosive_Rebar",
  // Nuke_Nobelisk = "Nuke_Nobelisk",
  // Turbo_Rifle_Ammo = "Turbo_Rifle_Ammo",
  // Compacted_Coal = "Compacted_Coal",
  // Turbofuel = "Turbofuel",
  // Packaged_Turbofuel = "Packaged_Turbofuel",
  // Empty_Canister = "Empty_Canister",
  // Encased_Industrial_Beam = "Encased_Industrial_Beam",
  // Stator = "Stator",
  // Motor = "Motor",
  // Automated_Wiring = "Automated_Wiring",
  // Heavy_Modular_Frame = "Heavy_Modular_Frame",
  // Plastic = "Plastic",
  // Heavy_Oil_Residue = "Heavy_Oil_Residue",
  // Rubber = "Rubber",
  // Fuel = "Fuel",
  // Polymer_Resin = "Polymer_Resin",
  // Petroleum_Coke = "Petroleum_Coke",
  // Circuit_Board = "Circuit_Board",
  // Computer = "Computer",
  // Modular_Engine = "Modular_Engine",
  // Adaptative_Control_Unit = "Adaptative_Control_Unit",
  // Packaged_Water = "Packaged_Water",
  // Packaged_Oil = "Packaged_Oil",
  // Packaged_Fuel = "Packaged_Fuel",
  // Packaged_Heavy_Oil_Residue = "Packaged_Heavy_Oil_Residue",
  // Packaged_Liquid_Biofuel = "Packaged_Liquid_Biofuel",
  // Liquid_Biofuel = "Liquid_Biofuel",
  // Gas_Filter = "Gas_Filter",
  // Alumina_Solution = "Alumina_Solution",
  // Packaged_Alumina_Solution = "Packaged_Alumina_Solution",
  // Aluminum_Scrap = "Aluminum_Scrap",
  // Aluminum_Ingot = "Aluminum_Ingot",
  // Alclad_Aluminum_Sheet = "Alclad_Aluminum_Sheet",
  // Aluminum_Casing = "Aluminum_Casing",
  // Iodine_Infused_Filter = "Iodine_Infused_Filter",
  // Sulfuric_Acid = "Sulfuric_Acid",
  // Packaged_Sulfuric_Acid = "Packaged_Sulfuric_Acid",
  // Battery = "Battery",
  // Assembly_Director_System = "Assembly_Director_System",
  // Encased_Uranium_Cell = "Encased_Uranium_Cell",
  // Electromagnetic_Control_Rod = "Electromagnetic_Control_Rod",
  // Uranium_Fuel_Rod = "Uranium_Fuel_Rod",
  // Magnetic_Field_Generator = "Magnetic_Field_Generator",
  // Empty_Fluid_Tank = "Empty_Fluid_Tank",
  // Packaged_Nitrogen_Gas = "Packaged_Nitrogen_Gas",
  // Heat_Sink = "Heat_Sink",
  // Cooling_System = "Cooling_System",
  // Fused_Modular_Frame = "Fused_Modular_Frame",
  // Turbo_Motor = "Turbo_Motor",
  // Thermal_Propulsion_Rocket = "Thermal_Propulsion_Rocket",
  // Nitric_Acid = "Nitric_Acid",
  // Packaged_Nitric_Acid = "Packaged_Nitric_Acid",
  // Non_Fissile_Uranium = "Non_Fissile_Uranium",
  // Plutonium_Pellet = "Plutonium_Pellet",
  // Encased_Plutonium_Cell = "Encased_Plutonium_Cell",
  // Plutonium_Fuel_Rod = "Plutonium_Fuel_Rod",
  // Copper_Powder = "Copper_Powder",
  // Pressure_Conversion_Cube = "Pressure_Conversion_Cube",
  // Nuclear_Pasta = "Nuclear_Pasta",
}
