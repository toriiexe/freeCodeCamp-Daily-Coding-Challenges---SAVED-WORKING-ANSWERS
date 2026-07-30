// JavaScript solution for 2026-04-03
// Browser History
function getBrowserHistory(commands) {
	let history = [];
	let indx = -1;

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
			history.push(c);
			indx++;
		}
	}

	return [history, indx];
}