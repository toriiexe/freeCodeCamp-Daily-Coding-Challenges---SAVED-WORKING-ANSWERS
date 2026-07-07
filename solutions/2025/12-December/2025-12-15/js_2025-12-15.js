// JavaScript solution for 2025-12-15
// Speed Check
function speedCheck(speedMph, speedLimitKph) {
    const toKph = 1.60934 * speedMph;
    if (toKph <= speedLimitKph) return 'Not Speeding';
    if (toKph <= speedLimitKph + 5) return 'Warning';
    return 'Ticket';
}