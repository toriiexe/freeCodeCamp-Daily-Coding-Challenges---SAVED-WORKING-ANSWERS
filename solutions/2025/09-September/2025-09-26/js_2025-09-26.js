// JavaScript solution for 2025-09-26
// Caught Speeding
function speeding(speeds, limit) {
    let speedingAmount = 0;
    let beyondSpeedLimitTotal = 0;

    for (const speed of speeds) {
        if (speed > limit) {
            speedingAmount += 1;
            beyondSpeedLimitTotal += speed - limit;
        }
    }

    if (speedingAmount === 0) {
        return [0, 0];
    }

    return [speedingAmount, beyondSpeedLimitTotal / speedingAmount];
}