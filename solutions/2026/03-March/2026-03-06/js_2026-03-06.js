// JavaScript solution for 2026-03-06
// Trail Traversal
function navigateTrail(m) {
	m = m.map(row => row.split(''));
	let loc = [0, 0];

	for (let r = 0; r < m.length; r++) {
		if (m[r].includes('C')) {
			loc = [r, m[r].indexOf('C')];
		}
	}

	let res = '';
	let old = null;

	while (true) {
		let [r, c] = loc;

		let right = [r, c + 1];
		let down = [r + 1, c];
		let left = [r, c - 1];
		let up = [r - 1, c];

		for (let [pos, move] of [[right, 'R'], [down, 'D'], [left, 'L'], [up, 'U']]) {
			if (pos[0] >= 0 && pos[0] < m.length &&pos[1] >= 0 && pos[1] < m[0].length && !(old && pos[0] === old[0] && pos[1] === old[1]) && ['T', 'G'].includes(m[pos[0]][pos[1]])) {
				res += move;

				if (m[pos[0]][pos[1]] === 'G') {
					return res;
				}

				old = loc;
				loc = pos;
				break;
			}
		}
	}
}