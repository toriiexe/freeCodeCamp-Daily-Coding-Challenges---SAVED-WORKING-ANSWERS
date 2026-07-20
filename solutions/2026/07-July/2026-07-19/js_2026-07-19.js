// JavaScript solution for 2026-07-19
// Elevator Stops
function elevatorStops(currentFloor, stops) {
    let allFloors = [...stops];

    if (!allFloors.includes(currentFloor)) {
        allFloors.push(currentFloor);
    }

    allFloors.sort((a, b) => a - b);

    const currFloorIndex = allFloors.indexOf(currentFloor);

    const lower = currFloorIndex > 0 ? allFloors[currFloorIndex - 1] : -1;

    const higher = currFloorIndex < allFloors.length - 1 ? allFloors[currFloorIndex + 1] : -1;

    const lowDiff = currentFloor - lower;
    const highDiff = higher - currentFloor;

    let res = [];

    if (highDiff >= lowDiff) {
        res.push(...allFloors.slice(0, currFloorIndex).reverse());
        res.push(...allFloors.slice(currFloorIndex + 1));
    } else {
        res.push(...allFloors.slice(currFloorIndex + 1));
        res.push(...allFloors.slice(0, currFloorIndex).reverse());
    }

    return res;
}