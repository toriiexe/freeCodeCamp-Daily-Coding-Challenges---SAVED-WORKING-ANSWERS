// JavaScript solution for 2026-02-16
// 2026 Winter Games Day 11: Ice Hockey
function getSemifinalMatchups(teams) {
	const scores = {};

	for (const team of teams) {
		const [, name, w, otw, otl] = team.match(/(.+): (\d+)-(\d+)-(\d+)-(\d+)/);

		scores[name] = Number(w) * 3 + Number(otw) * 2 + Number(otl);
	}

	const s = Object.keys(scores).sort((a, b) => scores[b] - scores[a]);

	return `The semi-final games will be ${s[0]} vs ${s[3]} and ${s[1]} vs ${s[2]}.`;
}