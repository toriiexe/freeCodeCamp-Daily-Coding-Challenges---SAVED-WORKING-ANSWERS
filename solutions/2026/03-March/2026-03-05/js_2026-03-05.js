// JavaScript solution for 2026-03-05
// Smallest Gap
function smallestGap(str) {
	let len = Infinity;
	let res = '';

	for (let i = 0; i < str.length; i++) {
		for (let j = i + 1; j < str.length; j++) {
			if (str[i] === str[j]) {
				let gap = str.slice(i + 1, j);

				if (gap.length < len) {
					len = gap.length;
					res = gap;
				}

				break;
			}
		}
	}

	return res;
}