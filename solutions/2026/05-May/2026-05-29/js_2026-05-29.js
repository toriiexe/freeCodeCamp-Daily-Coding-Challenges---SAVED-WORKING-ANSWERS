// JavaScript solution for 2026-05-29
//Wider Aspect Ratio

function gcd(a, b) {
    return b === 0 ? Math.abs(a) : gcd(b, a % b);
}

function getWiderAspectRatio(a, b) {
    let [wA, hA] = a.split('x').map(Number);
    let [wB, hB] = b.split('x').map(Number);

    if (wA * hB >= wB * hA) {
        const g = gcd(wA, hA);
        return `${wA / g}:${hA / g}`;
    } 
    else {
        const g = gcd(wB, hB);
        return `${wB / g}:${hB / g}`;
    }
}