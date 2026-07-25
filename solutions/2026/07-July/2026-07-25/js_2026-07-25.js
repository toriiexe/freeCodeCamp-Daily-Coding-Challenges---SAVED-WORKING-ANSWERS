// JavaScript solution for 2026-07-25
// Cell Signal
function findSignal(grid) {
	const res = [];

	for (let r = 0; r < grid.length; r++) {
		for (let c = 0; c < grid[r].length; c++) {
			const dist = grid[r][c];

			if (dist !== 0) {
				for (let dr = -dist; dr <= dist; dr++) {
					for (let dc = -dist; dc <= dist; dc++) {
						if (Math.max(Math.abs(dr), Math.abs(dc)) === dist) {
							const nr = r + dr;
							const nc = c + dc;

							if (
								nr >= 0 &&
								nr < grid.length &&
								nc >= 0 &&
								nc < grid[0].length
							) {
								res.push([nr, nc]);
							}
						}
					}
				}
			}
		}
	}

	const counter = new Map();

	for (const pos of res) {
		const key = pos.join(",");
		counter.set(key, (counter.get(key) || 0) + 1);
	}

	let best = null;
	let max = 0;

	for (const [key, count] of counter) {
		if (count > max) {
			max = count;
			best = key;
		}
	}

	return best.split(",").map(Number);
}