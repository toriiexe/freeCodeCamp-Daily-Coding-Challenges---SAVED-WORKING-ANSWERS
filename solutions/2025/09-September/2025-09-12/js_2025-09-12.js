// JavaScript solution for 2025-09-12
// Screen Time
function tooMuchScreenTime(hours) {
    for (const hour of hours) {
        if (hour >= 10) {
            return true;
        }
    }

    for (let i = 0; i < hours.length - 2; i++) {
        if ((hours[i] + hours[i + 1] + hours[i + 2]) / 3 >= 8) {
            return true;
        }
    }

    if (hours.reduce((sum, hour) => sum + hour, 0) / hours.length >= 6) {
        return true;
    }

    return false;
}