// JavaScript solution for 2026-08-05
// Spoken Duration
function getSpokenDuration(seconds) {
	const h = Math.floor(seconds / 3600);
	const m = Math.floor(seconds / 60) % 60;
	const s = seconds % 60;

	const res = [];

	if (h !== 0) {
		res.push(`${h} hour${h === 1 ? '' : 's'}`);
	}

	if (m !== 0) {
		res.push(`${m} minute${m === 1 ? '' : 's'}`);
	}

	if (s !== 0) {
		res.push(`${s} second${s === 1 ? '' : 's'}`);
	}

	if (res.length === 1) {
		return res[0];
	} else if (res.length === 2) {
		return `${res[0]} and ${res[1]}`;
	} else {
		return `${res[0]}, ${res[1]} and ${res[2]}`;
	}
}