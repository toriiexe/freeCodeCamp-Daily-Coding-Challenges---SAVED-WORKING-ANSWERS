// JavaScript solution for 2025-10-08
// Space Week Day 5: Goldilocks Zone
function goldilocksZone(mass) {
    const luminosity = mass ** 3.5;
    const luminositySqrt = Math.sqrt(luminosity);

    const startOfTheZone = 0.95 * luminositySqrt;
    const endOfTheZone = 1.37 * luminositySqrt;

    return [Number(startOfTheZone.toFixed(2)), Number(endOfTheZone.toFixed(2))];
}