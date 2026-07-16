// JavaScript solution for 2025-10-21
// Thermostat Adjuster 2
function adjustThermostat(currentF, targetC) {
    const targetF = (targetC * 1.8) + 32;

    if (currentF < targetF) {
        return `Heat: ${(targetF - currentF).toFixed(1)} degrees Fahrenheit`;
    } else if (currentF > targetF) {
        return `Cool: ${(currentF - targetF).toFixed(1)} degrees Fahrenheit`;
    }

    return 'Hold';
}