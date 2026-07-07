// JavaScript solution for 2026-06-10
// Itinerary Arrangements
function factorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
    }

function getItineraryCount(stops) {
    const lenOfStops = stops.length;
    return factorial(lenOfStops) * (2 * lenOfStops - 3);
}