// JavaScript solution for 2025-08-28
// Second Best
function getLaptopCost(laptops, budget) {
    const laptopSorted = [...new Set(laptops)].sort((a, b) => b - a);

    if (laptopSorted.length > 1 && budget >= laptopSorted[1]) {
        return laptopSorted[1];
    }

    for (const laptop of laptopSorted) {
        if (budget >= laptop) {
            return laptop;
        }
    }

    return 0;
}