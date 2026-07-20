// JavaScript solution for 2026-04-23
// Closest Time Direction
function getDirection(time1, time2) {
    const [h1, m1] = time1.split(':').map(Number);
    const [h2, m2] = time2.split(':').map(Number);

    const t1 = h1 * 60 + m1;
    const t2 = h2 * 60 + m2;

    const diff1 = (t2 - t1 + 24 * 60) % (24 * 60);
    const diff2 = (t1 - t2 + 24 * 60) % (24 * 60);

    if (diff1 < diff2) {
        return 'forward';
    } else if (diff1 > diff2) {
        return 'backward';
    } else {
        return 'equal';
    }
}