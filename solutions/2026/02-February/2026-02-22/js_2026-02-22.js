// JavaScript solution for 2026-02-22
// 2026 Winter Games Day 17: Closing Day
function countMedals(winners) {
    let countries = new Set();

    for (let row of winners) {
        for (let country of row) {
            countries.add(country);
        }
    }

    let medals = {};
    for (let country of countries) {
        medals[country] = [0, 0, 0];
    }

    for (let row of winners) {
        for (let i = 0; i < row.length; i++) {
            medals[row[i]][i]++;
        }
    }

    let sortedCountries = Array.from(countries).sort((a, b) => {
        if (medals[b][0] !== medals[a][0]) {
            return medals[b][0] - medals[a][0];
        }
        return a.localeCompare(b);
    });

    let res = 'Country,Gold,Silver,Bronze,Total';

    for (let country of sortedCountries) {
        let gold = medals[country][0];
        let silver = medals[country][1];
        let bronze = medals[country][2];
        let total = gold + silver + bronze;
        res += `\n${country},${gold},${silver},${bronze},${total}`;
    }

    return res;
}