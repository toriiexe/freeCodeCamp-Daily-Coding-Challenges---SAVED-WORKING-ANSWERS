// JavaScript solution for 2026-07-13
// Tally Counter
function getTallyCount(str) {
    return [...str].filter(x => x==='|').length + [...str].filter(x => x==='/').length;
}