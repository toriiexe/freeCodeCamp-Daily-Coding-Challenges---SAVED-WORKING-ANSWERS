// JavaScript solution for 2025-12-06
// Date Formatter
const monthDict = {
    January: 1,
    February: 2,
    March: 3,
    April: 4,
    May: 5,
    June: 6,
    July: 7,
    August: 8,
    September: 9,
    October: 10,
    November: 11,
    December: 12
};

function formatDate(dateString) {
    const [month, day, year] = dateString.replace(",", "").split(" ");

    return `${year}-${String(monthDict[month]).padStart(2, "0")}-${day.padStart(2, "0")}`;
}