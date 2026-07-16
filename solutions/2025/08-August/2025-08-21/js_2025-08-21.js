// JavaScript solution for 2025-08-21
// Mile Pace
function milePace(miles, duration) {
    const [m, s] = duration.split(':');

    const t = Number(m) * 60 + Number(s);
    const av = Math.round(t / miles);

    const mm = Math.floor(av / 60);
    const ss = av % 60;

    return `${String(mm).padStart(2, '0')}:${String(ss).padStart(2, '0')}`;
}