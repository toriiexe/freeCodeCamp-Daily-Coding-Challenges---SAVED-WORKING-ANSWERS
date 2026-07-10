// JavaScript solution for 2025-10-05
// Exoplanet Search
function hasExoplanet(readings) {
    let total = 0;
    let values = [];

    for (const reading of readings) {
        let value;

        if ('0' <= reading && reading <= '9') {
        value = Number(reading);
        } else if ('A' <= reading && reading <= 'Z') {
        value = reading.charCodeAt(0) - 65 + 10;
        } else {
        continue;
        }

        total += value;
        values.push(value);
    }

    if (values.length === 0) {
        return false;
    }

    let average = total / values.length;

    for (const value of values) {
        if (value <= average * 0.8) {
        return true;
        }
    }

    return false;
}