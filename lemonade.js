const inventory = {
    lemons: {
      quantity: 0,
      quality: "fresh",
      basePrice: 0.5,
      shippingTime: 2,
      status: "common",
      purchaseWeek: 0,
      expirationWeek: 0,
      freshness: 1.0,
      storageLocation: "pantry",
    },
    sugar: {
      quantity: 0,
      quality: "refined",
      basePrice: 0.25,
      shippingTime: 3,
      status: "common",
      purchaseWeek: 0,
      expirationWeek: 0,
      freshness: 1.0,
      storageLocation: "pantry",
    },
    water: {
      quantity: 0,
      quality: "filtered",
      basePrice: 0.1,
      shippingTime: 1,
      status: "common",
      purchaseWeek: 0,
      expirationWeek: 0,
      freshness: 1.0,
      storageLocation: "pantry",
    },
    ice: {
      quantity: 0,
      quality: "crushed",
      basePrice: 0.05,
      shippingTime: 2,
      status: "common",
      purchaseWeek: 0,
      expirationWeek: 0,
      freshness: 1.0,
      storageLocation: "freezer",
    },
  };
  
  // Add some ingredients to the inventory
  inventory.lemons.quantity += 10;
  inventory.lemons.purchaseWeek = 1;
  inventory.lemons.expirationWeek = 5;
  inventory.lemons.freshness = 0.8;
  inventory.lemons.storageLocation = "fridge";
  
  inventory.sugar.quantity += 5;
  inventory.sugar.purchaseWeek = 2;
  inventory.sugar.expirationWeek = 20;
  inventory.sugar.storageLocation = "pantry";
  
  inventory.water.quantity += 20;
  inventory.water.purchaseWeek = 3;
  inventory.water.storageLocation = "fridge";
  
  inventory.ice.quantity += 50;
  inventory.ice.purchaseWeek = 4;
  inventory.ice.storageLocation = "freezer";
  
  // Subtract some ingredients from the inventory
  inventory.lemons.quantity -= 2;
  inventory.sugar.quantity -= 1;
  inventory.water.quantity -= 5;
  inventory.ice.quantity -= 10;
  
  // Check the current inventory levels
  console.log("Current inventory levels:");
  console.log(`Lemons: ${inventory.lemons.quantity}`);
  console.log(`Sugar: ${inventory.sugar.quantity}`);
  console.log(`Water: ${inventory.water.quantity}`);
  console.log(`Ice: ${inventory.ice.quantity}`);
  