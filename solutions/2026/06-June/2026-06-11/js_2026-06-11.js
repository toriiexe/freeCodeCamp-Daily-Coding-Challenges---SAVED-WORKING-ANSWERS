// JavaScript solution for 2026-06-11
// Idea Rankings
function analyzeIdeas(ideas) {
    const res = [];

    for (const idea of ideas) {
        const expected = ((idea[1] + 4 * idea[2] + idea[3]) / 6) * idea[0].length;
        res.push([expected, idea[0]]);
    }

    res.sort((a, b) => a[0] - b[0]);

    return res.map(item => item[1]);
}