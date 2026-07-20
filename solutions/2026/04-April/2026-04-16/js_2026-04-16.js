// JavaScript solution for 2026-04-16
// String Math
function doMath(str) {
    const nums = (str.match(/\d+/g) || []).map(Number);
    let seps = str.match(/\D+/g) || [];

    if (str.length && !/\d/.test(str[0])) seps.shift();
    if (str.length && !/\d/.test(str[str.length - 1])) seps.pop();

    let total = nums.length ? nums[0] : 0;

    for (let i = 1; i < nums.length; i++) {
        if (seps[i - 1].length % 2 === 0) {
            total += nums[i];
        } else {
            total -= nums[i];
        }
    }

    return total;
}