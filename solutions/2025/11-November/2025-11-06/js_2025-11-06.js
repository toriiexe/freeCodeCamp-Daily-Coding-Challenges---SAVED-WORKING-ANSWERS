// JavaScript solution for 2025-11-06
// Weekday Finder
function getWeekday(dateString) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

	const [year, month, day] = dateString.split("-").map(Number);

    return days[new Date(year, month - 1, day).getDay()];
}