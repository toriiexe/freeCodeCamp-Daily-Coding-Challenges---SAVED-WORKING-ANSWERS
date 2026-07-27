// JavaScript solution for 2026-05-08
// Medication Reminder
function medicationReminder(medications, currentTime) {
	const meds = {
		Deployxitrin: [8, 16],
		Debuggamanizole: [7, 13, 21]
	};

	const [h, m] = currentTime.split(':').map(Number);
	const mins = h * 60 + m;
	const res = [];

	for (const [med, time] of medications) {
		const [medH, medM] = time.split(':').map(Number);
		const medMins = medH * 60 + medM;

		if (med in meds) {
			let minTime = Infinity;

			for (let t of meds[med]) {
				t *= 60;

				if (t === medMins){
                    continue;
                }

				const temp = (t - mins + 24 * 60) % (24 * 60);
				minTime = Math.min(minTime, temp);
			}

			res.push([med, minTime]);
		}
		else if (med === 'Mergeflictamine') {
			const temp = (medMins + 240 - mins + 24 * 60) % (24 * 60);
			res.push([med, temp]);
		}
	}

	res.sort((a, b) => a[1] - b[1]);

	return `${res[0][0]} in ${Math.floor(res[0][1] / 60)}h ${res[0][1] % 60}m`;
}