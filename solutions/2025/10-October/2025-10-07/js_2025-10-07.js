// JavaScript solution for 2025-10-07
// Space Week Day 4: Landing Spot
function findLandingSpot(matrix) {
	let dirs = [
		[0, 1],
		[-1, 0], [1, 0],
		[0, -1]
	];

	let lowestRisk = Infinity;
	let coords = [];

	for (let r = 0; r < matrix.length; r++) {
		for (let c = 0; c < matrix[r].length; c++) {
			if (matrix[r][c] === 0) {
				let s = 0;

				for (let d of dirs) {
					let dx = r + d[0];
					let dy = c + d[1];

					if (!(dx < 0 || dx >= matrix.length || dy < 0 || dy >= matrix[r].length)) {
						s += matrix[dx][dy];
					}
				}

				if (s < lowestRisk) {
					lowestRisk = s;
					coords = [r, c];
				}
			}
		}
	}

	return coords;
}
