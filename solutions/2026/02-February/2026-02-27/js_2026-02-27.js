// JavaScript solution for 2026-02-27
// Matrix Shift
function shiftMatrix(matrix, shift) {
	let res = matrix.map(row => [...row].fill(0));

	let rows = matrix.length;
	let cols = matrix[0].length;

	let s = shift % (rows * cols);

	if (s < 0) {
		s += rows * cols;
	}

	for (let r = 0; r < rows; r++) {
		for (let c = 0; c < cols; c++) {
			let index = r * cols + c;
			let newIndex = (index + s) % (rows * cols);

			let resR = Math.floor(newIndex / cols);
			let resC = newIndex % cols;

			res[resR][resC] = matrix[r][c];
		}
	}

	return res;
}