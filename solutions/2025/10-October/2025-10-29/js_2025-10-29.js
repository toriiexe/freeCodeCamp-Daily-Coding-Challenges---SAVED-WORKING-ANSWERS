// JavaScript solution for 2025-10-29
// Email Sorter
function sort(emails) {
	let ems = [...emails];

	for (let e = 0; e < ems.length; e++) {
		ems[e] = ems[e].split('@');
	}

    ems.sort((a, b) => {
        let domain = a[1].toLowerCase().localeCompare(b[1].toLowerCase());

        if (domain !== 0) {
            return domain;
        }

        return a[0].toLowerCase().localeCompare(b[0].toLowerCase());
    });

	for (let e = 0; e < ems.length; e++) {
		ems[e] = ems[e].join('@');
	}

	return ems;
}