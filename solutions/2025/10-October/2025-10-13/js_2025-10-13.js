// JavaScript solution for 2025-10-13
// 24 to 12
function to12(time) {
    let h = Number(time.slice(0, 2));
    let m = Number(time.slice(2, 4));
    let period = '';

    if (h === 0) {
        h = 12;
        period = 'AM';
    } else if (h < 12) {
        period = 'AM';
    } else if (h === 12) {
        period = 'PM';
    } else {
        h -= 12;
        period = 'PM';
    }

    return `${h}:${String(m).padStart(2, '0')} ${period}`;
}