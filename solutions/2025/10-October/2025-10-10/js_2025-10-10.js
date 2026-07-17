// JavaScript solution for 2025-10-10
// Space Week Day 7: Launch Fuel
function launchFuel(payload) {
    let weight = payload;
    let fuel = weight / 5;
    let extra = fuel;

    while (extra >= 1) {
        weight += extra;
        const newFuel = weight / 5;
        extra = newFuel - fuel;
        fuel = newFuel;
    }

    return Number(fuel.toFixed(1));
}