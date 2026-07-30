// JavaScript solution for 2026-07-29
// Contrast Rating 2
function getContrastRating(l1, l2, isLargeText) {
	const contrast = (l1 + 0.05) / (l2 + 0.05);

	if (isLargeText) {
		if (contrast >= 4.5) return 'AAA';
		if (contrast >= 3.0) return 'AA';
	} else {
		if (contrast >= 7.0) return 'AAA';
		if (contrast >= 4.5) return 'AA';
	}

	return 'Fail';
}