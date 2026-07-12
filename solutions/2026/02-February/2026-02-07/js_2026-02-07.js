// JavaScript solution for 2026-02-07
// 2026 Winter Games Day 2: Snowboarding
function getLandingStance(startStance, rotation) {
  const reversedStartStance = {
        'Regular': 'Goofy',
        'Goofy': 'Regular'
    }
    if (Math.floor(Math.abs(rotation) / 180) % 2 !== 0) return reversedStartStance[startStance];
    
    return startStance;
}