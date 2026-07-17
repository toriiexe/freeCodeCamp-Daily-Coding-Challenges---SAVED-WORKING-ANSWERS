// JavaScript solution for 2025-11-14
// Is It the Weekend?
function daysUntilWeekend(dateString) {
    const [year, month, day] = dateString.split('-').map(Number);

    const date = new Date(year, month - 1, day);
    const weekday = date.getDay();

    if (weekday === 0 || weekday === 6) {
        return "It's the weekend!";
    }

    const days = 6 - weekday;
    const dayStr = days === 1 ? "day" : "days";

    return `${days} ${dayStr} until the weekend.`;
}