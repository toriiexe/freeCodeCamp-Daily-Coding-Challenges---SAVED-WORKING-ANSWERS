// JavaScript solution for 2026-03-26
// Movie Night
function getMovieNightCost(day, showtime, numberOfTickets) {
    const prices = {
        Monday: 10,
        Tuesday: 5,
        Wednesday: 10,
        Thursday: 10,
        Friday: 12,
        Saturday: 12,
        Sunday: 12
    };

    let price = prices[day];

    if (day !== 'Tuesday') {
        let [hour, minute] = showtime.slice(0, -2).split(':').map(Number);
        const period = showtime.slice(-2);

        if (period === 'pm' && hour !== 12) hour += 12;
        if (period === 'am' && hour === 12) hour = 0;

        const minutes = hour * 60 + minute;

        if (minutes < 17 * 60) {
        price -= 2;
        }
    }

    const total = price * numberOfTickets;
    return `\$${total.toFixed(2)}`;
}