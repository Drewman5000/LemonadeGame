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
  
  inventory.sugar.quantity += 15;
  inventory.sugar.purchaseWeek = 2;
  inventory.sugar.expirationWeek = 20;
  inventory.sugar.storageLocation = "pantry";
  
  inventory.water.quantity += 25;
  inventory.water.purchaseWeek = 3;
  inventory.water.storageLocation = "fridge";
  
  inventory.ice.quantity += 50;
  inventory.ice.purchaseWeek = 4;
  inventory.ice.storageLocation = "freezer";
  
  // Check the current inventory levels
  console.log("Current inventory levels:");
  console.log(`Lemons: ${inventory.lemons.quantity}`);
  console.log(`Sugar: ${inventory.sugar.quantity}`);
  console.log(`Water: ${inventory.water.quantity}`);
  console.log(`Ice: ${inventory.ice.quantity}`);
  
const dropDownListOptionsArrays = {
  lemonTypes: ["Tree Lemons", "Store Lemons", "Neighbor's Tree Lemons", "Church Lemons", "Big Box Store Lemons", "Commercial Supplier", "Organic", "Concentrate"],
  waterTypes: ["Tap Water", "Bottled Water", "Big Box Brand Water", "Deluxe Water", "Commercial Supplier", "Filtered Tap"],
  sugarTypes: ["White Sugar", "Cane Sugar", "Honey", "Raw Sugar", "Organic Sugar"],
  iceTypes: ["Tap Water", "Ice Machine", "Filtered Tap", "Bottled Water", "Big box Brand Water", "Deluxe Water", "Commercial Supplier", "Filtered Tap"]
}