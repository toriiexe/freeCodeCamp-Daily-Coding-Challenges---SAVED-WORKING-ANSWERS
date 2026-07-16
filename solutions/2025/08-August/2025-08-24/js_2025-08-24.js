// JavaScript solution for 2025-08-24
// Character Battle
function battle(myArmy, opposingArmy) {
    if (myArmy.length > opposingArmy.length) {
        return 'Opponent retreated';
    }

    if (myArmy.length < opposingArmy.length) {
        return 'We retreated';
    }

    const values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

    let myWins = 0;
    let oppWins = 0;

    for (let i = 0; i < myArmy.length; i++) {
        const m = myArmy[i];
        const o = opposingArmy[i];

        const mVal = values.includes(m) ? values.indexOf(m) + 1 : !isNaN(m) && m !== '' ? Number(m) : 0;

        const oVal = values.includes(o) ? values.indexOf(o) + 1 : !isNaN(o) && o !== '' ? Number(o) : 0;

        if (mVal > oVal) {
            myWins++;
        } else if (oVal > mVal) {
            oppWins++;
        }
    }

    if (myWins > oppWins) {
        return 'We won';
    } else if (oppWins > myWins) {
        return 'We lost';
    }

    return 'It was a tie';
}