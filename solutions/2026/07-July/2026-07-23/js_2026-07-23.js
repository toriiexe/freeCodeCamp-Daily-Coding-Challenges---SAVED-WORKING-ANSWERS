// JavaScript solution for 2026-07-23
// Game Theory
function playGame(p1, p2) {
    let s1 = 0;
    let s2 = 0;
    const length = Math.max(p1.length, p2.length);

    for (let i = 0; i < length; i++){
        if (p1[i] === 'C' && p2[i] === 'C'){
            s1 += 3;
            s2 += 3;
        } else if (p1[i] === 'D' && p2[i] === 'D'){
            s1++;
            s2++;
        } else{
            if (p1[i] === 'D'){
                s1 += 5;
            } else{
                s2 += 5;
            }
        }
    }
    
    return [s1, s2];
}