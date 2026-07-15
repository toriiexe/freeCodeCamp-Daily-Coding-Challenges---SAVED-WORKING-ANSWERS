// JavaScript solution for 2025-12-21
// Daylight Hours
function daylightHours(latitude) {
    const daylight = new Map([
        [-90, 24],
        [-75, 23],
        [-60, 21],
        [-45, 15],
        [-30, 13],
        [-15, 12],
        [0, 12],
        [15, 11],
        [30, 10],
        [45, 9],
        [60, 6],
        [75, 2],
        [90, 0]
    ]);

    let closestLatitude = null;
    let smallestDifference = Infinity;

    for (const lat of daylight.keys()) {
        const difference = Math.abs(lat - latitude);

        if (difference < smallestDifference) {
            smallestDifference = difference;
            closestLatitude = lat;
        }
    }

    return daylight.get(closestLatitude);
}