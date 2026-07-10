// JavaScript solution for 2025-09-27
// Spam Detector
function isSpam(number) {
    let n = number.split(' ');

    let a = n[0].slice(1);
    let bbb = n[1].slice(1, 4);
    let ccc = n[2].slice(0, 3);
    let dddd = n[2].slice(4);

    if (a.length > 2 || !a.startsWith('0')) {
        return true;
    }

    let b = Number(bbb);
    if (b < 200 || b > 900) {
        return true;
    }

    let c = ccc.split('').reduce((sum, digit) => sum + Number(digit), 0);
    if (dddd.includes(String(c))) {
        return true;
    }

    let nums = a + bbb + ccc + dddd;
    for (let i = 0; i < nums.length - 3; i++) {
        if (new Set(nums.slice(i, i + 4)).size == 1) {
        return true;
        }
    }

    return false;
}