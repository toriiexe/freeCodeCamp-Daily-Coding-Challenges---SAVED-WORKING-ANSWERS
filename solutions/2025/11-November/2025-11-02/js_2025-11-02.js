// JavaScript solution for 2025-11-02
// Infected
	let s = 1;

	for (let day = 1; day <= days; day++) {
		s *= 2;
		if (day % 3 === 0) {
			s -= Math.ceil(s * 0.2);
		}
	}

	return s;