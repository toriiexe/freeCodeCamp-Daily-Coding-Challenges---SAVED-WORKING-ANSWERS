// JavaScript solution for 2026-06-17
// Spellcaster
function cast(spells) {
    const categories = {
        f: 'Destruction',
        l: 'Destruction',
        i: 'Control',
        w: 'Control',
        h: 'Restoration',
        s: 'Restoration'
    };

    const scores = {
        f: 3,
        l: 3,
        i: 2,
        w: 2,
        h: 1,
        s: 1
    };

    let total = 0;
    let multiplier = 1;
    let lastCategory = '';

    for (let i = 0; i < spells.length; i++) {
        const spell = spells[i];
        let score = 0;

        if (i > 0 && categories[spell] !== lastCategory) {
            multiplier++;
        } else {
            multiplier = 1;
        }

        score += scores[spell] * multiplier;
        lastCategory = categories[spell];
        total += score;
    }

    return total;
}