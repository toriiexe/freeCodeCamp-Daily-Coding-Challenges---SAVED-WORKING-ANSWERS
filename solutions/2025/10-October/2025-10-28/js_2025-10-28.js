// JavaScript solution for 2025-10-28
// Navigator
function navigate(commands) {
	let history = ['Home'];
	let indx = 0;

	for (let c of commands) {
		if (c === 'Back') {
			if (indx > 0) {
				indx--;
			}
		}
		else if (c === 'Forward') {
			if (indx < history.length - 1) {
				indx++;
			}
		}
		else {
			history = history.slice(0, indx + 1);
			history.push(c.slice(6));
			indx++;
		}
	}

	return history[indx];
}