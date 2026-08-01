// JavaScript solution for 2026-08-01
// Magic Square Solver
function solveMagicSquare(grid) {
	let rows = grid.map(row => row.reduce((a, b) => a + b, 0));
	let cols = [];

	for (let i = 0; i < grid[0].length; i++) {
		let sum = 0;
		for (let row of grid) {
			sum += row[i];
		}
		cols.push(sum);
	}

	let diag = [
		grid[0][0] + grid[1][1] + grid[2][2],
		grid[0][2] + grid[1][1] + grid[2][0]
	];

	let allTogether = new Set([...rows, ...cols, ...diag]);

	if (allTogether.size > 2) {
		return 'impossible';
	}

	let [n1, n2] = [...allTogether];

	return Math.abs(n1 - n2);
}