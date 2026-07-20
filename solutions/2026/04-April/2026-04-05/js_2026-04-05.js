// JavaScript solution for 2026-04-05
// Digit Rotation Escape
function getRotation(n) {
    const s = String(n);
    const length = s.length;
    let step = -1;

    for (let i = 0; i < length; i++) {
        step++;
        const rot = Number(s.slice(i) + s.slice(0, i));
        if (rot % length === 0) {
        return step;
        }
    }

    return 'none';
}