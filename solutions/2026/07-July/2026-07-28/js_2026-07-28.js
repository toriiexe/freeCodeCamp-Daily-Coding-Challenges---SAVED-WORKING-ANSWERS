// JavaScript solution for 2026-07-28
// Contrast Rating 1
function getContrastRating(ratio, isLargeText) {
    const ratioToNum = Number(ratio);
	if (isLargeText) {
		if (ratioToNum >= 4.5) return 'AAA';
		if (ratioToNum >= 3.0) return 'AA';
		return 'Fail';
	}

	if (ratioToNum >= 7.0) return 'AAA';
	if (ratioToNum >= 4.5) return 'AA';
	return 'Fail';
}