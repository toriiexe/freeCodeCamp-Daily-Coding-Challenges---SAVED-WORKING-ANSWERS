// JavaScript solution for 2025-11-30
// AI Detector
function detectAI(text) {
	let dashes = (text.match(/-/g) || []).length;

	if (dashes >= 2) {
		return 'AI';
	}

	let brackets = text.match(/\([^)]*\)/g) || [];

	if (brackets.length >= 2) {
		return 'AI';
	}

	let longWordsCounter = 0;

	for (let word of text.split(' ')) {
		let w = word.replace(/[^a-zA-Z]/g, '');

		if (w.length >= 7) {
			longWordsCounter++;
		}
	}

	if (longWordsCounter >= 3) {
		return 'AI';
	}

	return 'Human';
}