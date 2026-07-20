// JavaScript solution for 2026-01-12
// Plant the Crop
function getNumberOfPlants(fieldSize, unit, crop) {
    const crops = {
        'corn': 1,
        'wheat': 0.1,
        'soybeans': 0.5,
        'tomatoes': 0.25,
        'lettuce': 0.2
    }

    const sqrt_m = unit === 'acres' ? fieldSize * 4046.86 : fieldSize * 10000;

    return Math.floor(sqrt_m / crops[crop]);
}