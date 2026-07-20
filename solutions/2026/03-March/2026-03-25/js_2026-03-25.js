// JavaScript solution for 2026-03-25
// Cooldown Time
function canRetake(finishTime, currentTime) {
    const finish = new Date(finishTime);
    const current = new Date(currentTime);

    return current - finish >= 48 * 60 * 60 * 1000;
}