// JavaScript solution for 2025-10-09
// Space Week Day 6: Moon Phase
function moonPhase(dateString) {
    const reference = new Date('2000-01-06');
    const target = new Date(dateString);

    const diff = (target - reference) / (1000 * 60 * 60 * 24);
    const cycleDay = (diff % 28) + 1;

    if (cycleDay <= 7) {
        return 'New';
    } else if (cycleDay <= 14) {
        return 'Waxing';
    } else if (cycleDay <= 21) {
        return 'Full';
    } else {
        return 'Waning';
    }
}