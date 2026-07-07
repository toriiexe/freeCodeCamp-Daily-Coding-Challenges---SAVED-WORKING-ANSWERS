// JavaScript solution for 2026-06-08
// Jet Lagged
function getJetLagHours(departureCity, arrivalCity, flightDuration, direction) {

    const timezone_diff = {
        'Los Angeles': -8,
        'New York': -5,
        'London': 0,
        'Istanbul': 3,
        'Dubai': 4,
        'Hong Kong': 8,
        'Tokyo': 9
    }

    const directionMultiplier = direction === 'east' ? 1.5 : 1.0

    return Math.round((Math.abs(timezone_diff[arrivalCity] - timezone_diff[departureCity]) + (flightDuration * 0.1) * directionMultiplier) * 10) / 10;
}