// Here your variables
let gold = 10;
// Add your missing variables here (e.g., ore, wood, swords, axes, fireBurning)

// Here your Functions
// Define your missing functions here: buy(item), make(weapon), sell(weapon), fire(), inventory()

// Starting Inventory Data
let inventoryData = {
  gold: 10,
  ore: 0,
  wood: 0,
  swords: 0,
  axes: 0,
  fireOn: false
};

// Help Function
function help() {
  return `INSTRUCTIONS:
Blacksmith is a simple text-based game. 

As a blacksmith, you convert ore and wood into swords and axes. You buy resources using gold and sell your weapons for gold.

COMMANDS:
- fire()
- buy(item)
- make(item)
- sell(item)
- inventory()
- help()
`;
}

// Fire Function
function fire() {
  if (inventoryData.fireOn) {
    inventoryData.fireOn = false;
    console.log("The fire has stopped.");
  } else {
    if (inventoryData.wood >= 1) {
      inventoryData.wood--;
      inventoryData.fireOn = true;
      console.log("The fire has started.");
    } else {
      console.log("Not enough wood to start the fire.");
    }
  }
}

// Buy Function
function buy(item) {
  if (inventoryData.fireOn) {
    console.log("Cannot buy while the fire is burning.");
    return;
  }
  if (item === "ore") {
    if (inventoryData.gold >= 3) {
      inventoryData.gold -= 3;
      inventoryData.ore++;
      console.log("Bought 1 piece of ore.");
    } else {
      console.log("Not enough gold to buy ore.");
    }
  } else if (item === "wood") {
    if (inventoryData.gold >= 1) {
      inventoryData.gold -= 1;
      inventoryData.wood++;
      console.log("Bought 1 piece of wood.");
    } else {
      console.log("Not enough gold to buy wood.");
    }
  } else {
    console.log("Invalid item. You can buy 'ore' or 'wood'.");
  }
}

// Make Function
function make(item) {
  if (!inventoryData.fireOn) {
    console.log("You need a burning fire to make weapons.");
    return;
  }
  if (item === "sword") {
    if (inventoryData.ore >= 2 && inventoryData.wood >= 1) {
      inventoryData.ore -= 2;
      inventoryData.wood -= 1;
      inventoryData.swords++;
      console.log("Made 1 sword.");
    } else {
      console.log("Not enough materials to make a sword.");
    }
  } else if (item === "axe") {
    if (inventoryData.ore >= 1 && inventoryData.wood >= 2) {
      inventoryData.ore -= 1;
      inventoryData.wood -= 2;
      inventoryData.axes++;
      console.log("Made 1 axe.");
    } else {
      console.log("Not enough materials to make an axe.");
    }
  } else {
    console.log("Invalid item. You can make 'sword' or 'axe'.");
  }
}

// Sell Function
function sell(item) {
  if (inventoryData.fireOn) {
    console.log("Cannot sell while the fire is burning.");
    return;
  }
  if (item === "sword") {
    if (inventoryData.swords >= 1) {
      inventoryData.swords--;
      inventoryData.gold += 5;
      console.log("Sold 1 sword for 5 gold.");
    } else {
      console.log("You don't have any swords to sell.");
    }
  } else if (item === "axe") {
    if (inventoryData.axes >= 1) {
      inventoryData.axes--;
      inventoryData.gold += 4;
      console.log("Sold 1 axe for 4 gold.");
    } else {
      console.log("You don't have any axes to sell.");
    }
  } else {
    console.log("Invalid item. You can sell 'sword' or 'axe'.");
  }
}

// Inventory Function
function inventory() {
  console.log(`Current Inventory: Gold: ${inventoryData.gold}, Ore: ${inventoryData.ore}, Wood: ${inventoryData.wood}, Swords: ${inventoryData.swords}, Axes: ${inventoryData.axes}`);
}

