// JavaScript solution for 2026-08-04
// Golf Handicap Calculator
function calculateHandicap(scores, pars) {
	const avg = scores.reduce((sum, score, i) => sum + score - pars[i], 0) / scores.length;
	return +avg.toFixed(1);
}