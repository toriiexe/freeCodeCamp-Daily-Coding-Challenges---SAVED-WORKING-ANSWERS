// JavaScript solution for 2025-10-12
// Battle of Words
function battle(ourTeam, opponent) {
    const us = [];
    const them = [];

    for (const word of ourTeam.split(' ')) {
        let total = 0;

        for (const c of word) {
            if (c >= 'a' && c <= 'z') {
                total += c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            } else {
                total += (c.charCodeAt(0) - 'A'.charCodeAt(0) + 1) * 2;
            }
        }

        us.push(total);
    }

    for (const word of opponent.split(' ')) {
        let total = 0;

        for (const c of word) {
            if (c >= 'a' && c <= 'z') {
                total += c.charCodeAt(0) - 'a'.charCodeAt(0) + 1;
            } else {
                total += (c.charCodeAt(0) - 'A'.charCodeAt(0) + 1) * 2;
            }
        }

        them.push(total);
    }

    let won = 0;
    let lost = 0;

    for (let i = 0; i < us.length; i++) {
        if (us[i] > them[i]) {
            won++;
        } else if (us[i] < them[i]) {
            lost++;
        }
    }

    if (won > lost) {
        return 'We win';
    } else if (won < lost) {
        return 'We lose';
    }

    return 'Draw';
    }