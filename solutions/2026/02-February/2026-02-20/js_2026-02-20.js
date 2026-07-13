// JavaScript solution for 2026-02-20
// 2026 Winter Games Day 15: Freestyle Skiing
function isValidTrick(trickName) {
    const firstParts = ['Misty', 'Ghost', 'Thunder', 'Solar', 'Sky', 'Phantom', 'Frozen', 'Polar'];

    const secondParts = ['Twister', 'Icequake', 'Avalanche', 'Vortex', 'Snowstorm', 'Frostbite', 'Blizzard', 'Shadow'];

    const [firstPart, secondPart] = trickName.split(' ');

    return (firstParts.includes(firstPart) && secondParts.includes(secondPart));
}