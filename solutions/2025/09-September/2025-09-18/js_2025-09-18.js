// JavaScript solution for 2025-09-18
// Fill The Tank
function costToFill(tankSize, fuelLevel, pricePerGallon) {
  return `\$${((tankSize - fuelLevel) * pricePerGallon).toFixed(2)}`;
}