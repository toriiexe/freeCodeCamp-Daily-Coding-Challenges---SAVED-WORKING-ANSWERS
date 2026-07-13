// JavaScript solution for 2026-02-24
// Business Day Count
function countBusinessDays(start, end) {
    let counter = 0;

    let d1 = new Date(start);
    let d2 = new Date(end);

    let current = new Date(d1);

    while (current <= d2) {
        let day = current.getDay();

        if (day !== 0 && day !== 6) {
            counter++;
        }

        current.setDate(current.getDate() + 1);
    }

    return counter;
}