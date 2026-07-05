// JavaScript solution for 2026-05-03
// Good Day
function getGreeting(s) {
    const [h, m] = s.split(':');
    const time = 60 * Number(h) + Number(m);

    if (5 * 60 <= time && time <= 11 * 60 + 59) {
        return 'Good morning';
    } 
    else if (12 * 60 <= time && time <= 17 * 60 + 59) {
        return 'Good afternoon';
    } 
    else if (18 * 60 <= time && time <= 21 * 60 + 59) {
        return 'Good evening';
    } 
    else if ((22 * 60 <= time && time <= 23 * 60 + 59) || (0 <= time && time <= 4 * 60 + 59)) {
        return 'Good night';
    }
}


/*
// Good Day - SHORTER VERSION
function getGreeting(s) {
    const [h, m] = s.split(':').map(Number);
    const hour = h * 60 + m;

    if (hour < 5 * 60) return 'Good night';
    if (hour < 12 * 60) return 'Good morning';
    if (hour < 18 * 60) return 'Good afternoon';
    if (hour < 22 * 60) return 'Good evening';
    return 'Good night';
}
*/