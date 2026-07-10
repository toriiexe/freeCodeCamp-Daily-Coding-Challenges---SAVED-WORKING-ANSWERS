// JavaScript solution for 2025-09-15
// Thermostat Adjuster
function adjustThermostat(temp, target) {
    if (temp < target) return 'heat';
    if (temp > target) return 'cool';
    return 'hold';
}