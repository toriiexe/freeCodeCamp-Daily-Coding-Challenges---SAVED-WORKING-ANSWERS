// JavaScript solution for 2026-04-09
// Next Bingo Number
function getNextBingoNumber(n) {
    const nums = {
        1: 'B',
        16: 'I',
        31: 'N',
        46: 'G',
        61: 'O'
    };

    let num = Number(n.slice(1)) + 1;

    if (num === 76) {
        num = 1;
    }

    let letter = '';
    for (const key in nums) {
        if (num >= Number(key)) {
            letter = nums[key];
        }
    }

    return `${letter}${num}`;
}