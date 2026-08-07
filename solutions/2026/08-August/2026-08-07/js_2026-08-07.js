// JavaScript solution for 2026-08-07
// Nonogram Validator
function isValidNonogram(clue, cells) {
	const cellsStr = cells.join('').split('0').filter(x => x !== '');;

	if (clue.length !== cellsStr.length) {
		return false;
	}

	for (let i = 0; i < cellsStr.length; i++) {
		if (cellsStr[i].length !== clue[i]) {
			return false;
		}
	}

	return true;
}