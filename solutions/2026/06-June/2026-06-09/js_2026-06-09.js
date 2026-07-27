// JavaScript solution for 2026-06-09
// Roommates
function getRoommates(people) {
	const groups = {};

	for (const person of people) {
		const group = person.group;

		if (!(group in groups)) {
			groups[group] = [];
		}

		groups[group].push(person.name);
	}

	const res = [];

	for (const names of Object.values(groups)) {
		for (let i = 0; i < names.length; i += 2) {
			if (i + 1 < names.length) {
				res.push(`${names[i]} and ${names[i + 1]}`);
			} else {
				res.push(names[i]);
			}
		}
	}

	return res;
}