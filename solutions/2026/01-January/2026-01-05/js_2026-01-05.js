// JavaScript solution for 2026-01-05
// Tire Pressure
function tireStatus(pressuresPSI, rangeBar) {
    const barValue = 14.5038;
    const minBar = rangeBar[0] * barValue;
    const maxBar = rangeBar[1] * barValue;

    const res = [];

    for (const pressure of pressuresPSI) {
        if (pressure < minBar) {
            res.push("Low");
        } else if (pressure <= maxBar) {
            res.push("Good");
        } else {
            res.push("High");
        }
    }

    return res;
}