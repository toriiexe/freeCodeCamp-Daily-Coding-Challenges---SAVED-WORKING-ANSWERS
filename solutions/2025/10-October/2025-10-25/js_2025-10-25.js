// JavaScript solution for 2025-10-25
// Complementary DNA
function complementaryDNA(strand) {
    const mapping = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }

    let res = [];
    for (const key of strand){
        res.push(mapping[key]);
    }

    return res.join('');
}