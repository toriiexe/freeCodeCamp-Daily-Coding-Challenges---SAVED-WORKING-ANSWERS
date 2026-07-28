// JavaScript solution for 2026-02-01
// Digital Detox
function digitalDetox(logs) {
    logs.sort();

    const dates = {};

    for (const log of logs) {
        const date = log.slice(0, 10);
        dates[date] = (dates[date] || 0) + 1;

        if (dates[date] > 2) {
            return false;
        }
    }

    const times = logs.map(log => new Date(log.replace(' ', 'T')));

    for (let i = 1; i < times.length; i++) {
        if ((times[i] - times[i - 1]) < 4 * 60 * 60 * 1000) {
            return false;
        }
    }

    return true;
}