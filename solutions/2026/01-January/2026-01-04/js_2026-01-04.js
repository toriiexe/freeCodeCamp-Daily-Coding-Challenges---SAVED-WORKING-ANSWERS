// JavaScript solution for 2026-01-04
// Leap Year Calculator
function isLeapYear(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}