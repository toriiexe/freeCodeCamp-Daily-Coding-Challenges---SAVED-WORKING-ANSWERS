// JavaScript solution for 2025-11-29
// Ball Trajectory
function getNextLocation(matrix) {
	let prev = [0, 0];
	for (let r = 0; r < matrix.length; r++) {
		if (matrix[r].includes(1)) {
			prev = [r, matrix[r].indexOf(1)];
		}
	}

	let curr = [0, 0];
	for (let r = 0; r < matrix.length; r++) {
		if (matrix[r].includes(2)) {
			curr = [r, matrix[r].indexOf(2)];
		}
	}

	let dx = curr[0] - prev[0];
	let dy = curr[1] - prev[1];
  
	let nxtX = curr[0] + dx;
	let nxtY = curr[1] + dy;

	if (nxtX < 0 || nxtX >= matrix.length) {
		dx = -dx;
		nxtX = curr[0] + dx;
	}

	if (nxtY < 0 || nxtY >= matrix[0].length) {
		dy = -dy;
		nxtY = curr[1] + dy;
	}

	return [nxtX, nxtY];
}