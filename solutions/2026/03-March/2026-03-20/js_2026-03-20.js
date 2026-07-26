// JavaScript solution for 2026-03-20
// Equinox Shadows
function getShadow(time) {
	const [h, m] = time.split(':').map(Number);
	const t = m === 30 ? h + 0.5 : h;

	if (t < 6 || t >= 18 || t === 12) {
		return 'No shadow';
	}

	const shadow = (12 - t) ** 3;

	if (shadow > 0) {
		return `${shadow}ft west`;
	} else {
		return `${Math.abs(shadow)}ft east`;
	}
}