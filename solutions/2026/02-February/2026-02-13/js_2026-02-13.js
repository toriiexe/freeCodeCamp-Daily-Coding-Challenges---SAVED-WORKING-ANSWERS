// JavaScript solution for 2026-02-13
// 2026 Winter Games Day 8: Luge
function getFastestSpeed(times) {
    let segments = [320, 280, 350, 300, 250];
    let speeds = [];

    for (let i = 0; i < 5; i++) {
        speeds.push(segments[i] / times[i]);
    }

    let fastest = Math.max(...speeds);
    let segment = speeds.indexOf(fastest) + 1;

    return `The luger's fastest speed was ${fastest.toFixed(2)} m/s on segment ${segment}.`;
}