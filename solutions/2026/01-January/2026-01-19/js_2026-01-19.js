// JavaScript solution for 2026-01-19
// Energy Consumption
function compareEnergy(caloriesBurned, wattHoursUsed) {
    const calsToJoules = caloriesBurned * 4184;
    const wattToJoules = wattHoursUsed * 3600;

    if (calsToJoules > wattToJoules) {
        return 'Workout';
    } else if (calsToJoules === wattToJoules) {
        return 'Equal';
    } else {
        return 'Devices';
    }
}