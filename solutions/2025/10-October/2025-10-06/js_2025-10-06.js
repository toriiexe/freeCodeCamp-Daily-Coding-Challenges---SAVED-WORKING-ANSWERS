// JavaScript solution for 2025-10-06
// Space Week Day 3: Phone Home
function sendMessage(route) {
    const speed = 300000;

    const distance = route.reduce((sum, d) => sum + d, 0);
    const travelTime = distance / speed;
    const delay = (route.length - 1) * 0.5;

    return Number((travelTime + delay).toFixed(4));
}