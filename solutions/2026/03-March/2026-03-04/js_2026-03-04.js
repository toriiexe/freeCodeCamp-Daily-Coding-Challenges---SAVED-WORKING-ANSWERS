// JavaScript solution for 2026-03-04
// Playing Card Values
function cardValues(cards) {
    const lettersToValues = {
        'A': 1,
        'J': 10,
        'Q': 10,
        'K': 10
    }

    const res = [];

    for (const card of cards){
        const value = card.slice(0, -1);
        if (/^\d+$/.test(value)){
            res.push(Number(value));
        } else{
            res.push(lettersToValues[value] ?? 0);
        }
    }

    return res;
}