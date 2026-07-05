// JavaScript solution for 2026-05-05
// Narcissistic Number
function isNarcissistic(n) {
    const nStr = String(n);
    const length = nStr.length;
    let s = 0;

    for (let i = 0; i < length; i++) {
        const num = Number(nStr[i]);
        s += Math.pow(num, length);
    }

    return s === n;
}