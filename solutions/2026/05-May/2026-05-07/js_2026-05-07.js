// JavaScript solution for 2026-05-07
// Longest Common Substring
function getLongestSubstring(str) {
	let substring = '';

	for (let i = 0; i < str.length; i++) {
		for (let j = i; j < str.length; j++) {
			const sub = str.slice(i, j + 1);

			let counter = 0;

			for (let k = 0; k <= str.length - sub.length; k++) {
				if (str.slice(k, k + sub.length) === sub) {
					counter++;
				}
			}

			if (counter > 1 && sub.length > substring.length) {
				substring = sub;
			}
		}
	}

	return substring;
}