// JavaScript solution for 2026-03-30
// Due Date
function getDueDate(dateStr) {
    const [year, month, day] = dateStr.split('-').map(Number);

    let newYear = year;
    let newMonth = month + 9;

    if (newMonth > 12) {
        newYear += Math.floor((newMonth - 1) / 12);
        newMonth = ((newMonth - 1) % 12) + 1;
    }

    const lastDay = new Date(newYear, newMonth, 0).getDate();

    const newDay = Math.min(day, lastDay);

    return `${newYear}-${String(newMonth).padStart(2, '0')}-${String(newDay).padStart(2, '0')}`;
}