// JavaScript solution for 2026-07-26
// Letter Distance
function letterDistance(str1, str2) {
    let totalDist = 0;

    for (let i = 0; i < Math.max(str1.length, str2.length); i++){
        let s1 = str1[i];
        let s2 = str2[i];

        const diff = Math.abs(s1.charCodeAt(0) - s2.charCodeAt(0));

        totalDist += Math.min(diff, 26 - diff);
    }

    return totalDist;
}