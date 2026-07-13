// JavaScript solution for 2026-07-11
// Five Dice
function fiveDice(dice) {
    const howManyOfAKind = [];

    for (let i = 1; i <= 6; i++) {
        howManyOfAKind.push(dice.filter(x => x === i).length);
    }

    if (howManyOfAKind.includes(5)) {
        return 'five of a kind';
    }

    if (howManyOfAKind.includes(4)) {
        return 'four of a kind';
    }

    if (howManyOfAKind.includes(3) && howManyOfAKind.includes(2)) {
        return 'full house';
    }

    if (howManyOfAKind.every((x, i) => x === [1,1,1,1,1,0][i]) || howManyOfAKind.every((x, i) => x === [0,1,1,1,1,1][i])) {
        return 'large straight';
    }

    if (howManyOfAKind.slice(0, 4).every((x, i) => x === [1,1,1,1][i]) || howManyOfAKind.slice(1, 5).every((x, i) => x === [1,1,1,1][i]) || howManyOfAKind.slice(2).every((x, i) => x === [1,1,1,1][i])) {
        return 'small straight';
    }

    if (howManyOfAKind.includes(3)) {
        return 'three of a kind';
    }

    if (howManyOfAKind.filter(x => x === 2).length === 2) {
        return 'two pair';
    }

    if (howManyOfAKind.includes(2)) {
        return 'pair';
    }

    return 'no pair';
}