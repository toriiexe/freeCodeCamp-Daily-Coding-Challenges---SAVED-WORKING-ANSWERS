// JavaScript solution for 2026-04-06
// What Day Is It?
function getDayOfWeek(timestamp) {
    return ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][new Date(timestamp).getUTCDay()];
}