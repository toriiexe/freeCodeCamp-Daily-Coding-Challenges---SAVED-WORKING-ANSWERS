// JavaScript solution for 2025-12-29
// Takeoff Fuel
function fuelToAdd(currentGallons, requiredLiters) {
    const gallon = 3.78541;
    const currentLiters = currentGallons * gallon;
    const diff = currentLiters - requiredLiters;

    if (diff >= 0) {
        return 0;
    } else {
        return Math.ceil(Math.abs(diff / gallon));
    }
}