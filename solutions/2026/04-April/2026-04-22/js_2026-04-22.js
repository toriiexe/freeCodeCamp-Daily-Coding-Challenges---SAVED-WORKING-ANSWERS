// JavaScript solution for 2026-04-22
// Earth Day: Cleanup Crew
const VALUES = {
    bottle: 10,
    can: 6,
    bag: 8,
    tire: 35,
    straw: 4,
    cardboard: 3,
    newspaper: 3,
    shoe: 12,
    electronics: 25,
    battery: 18,
    mattress: 38,
};

function getCleanupScore(items) {
    let total = 0;
    let streak = 0;
    let multiplier = 2;

    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        let score;

        if (Array.isArray(item)) {
            score = item[1];
        } else {
        if (i > 0 && items[i - 1] === item) {
            streak++;
        } else {
            streak = 0;
        }

        score = VALUES[item] + streak;
        }

        if ((i + 1) % 5 === 0) {
            score *= multiplier;
            multiplier++;
        }

        total += score;
    }

    return total;
}