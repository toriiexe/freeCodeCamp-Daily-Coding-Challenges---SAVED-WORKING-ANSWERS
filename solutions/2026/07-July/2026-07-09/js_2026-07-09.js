// JavaScript solution for 2026-07-09
// Issue Triage 2
function triageIssue(title, labels) {
	if (labels.length === 0) {
		if (title.includes('error') || title.includes('bug')) {
			labels.push('bug', 'needs triage');
		} else if (title.includes('feature') || title.includes('add')) {
			labels.push('enhancement', 'discussing');
		}
	} else {
		if (labels.includes('needs triage') && (title.includes('simple') || title.includes('easy'))) {
			labels.splice(labels.indexOf('needs triage'), 1);
			labels.push('good first issue');
		} else if (labels.includes('discussing') && (title.includes('planned') || title.includes('next'))) {
			labels.splice(labels.indexOf('discussing'), 1);
			labels.push('on the roadmap');
		} else if (labels.includes('needs triage') || labels.includes('discussing')) {
			if (labels.includes('needs triage')) {
				labels.splice(labels.indexOf('needs triage'), 1);
			}
			if (labels.includes('discussing')) {
				labels.splice(labels.indexOf('discussing'), 1);
			}
			labels.push('help wanted');
		}
	}

	if (title.includes('security')) {
		labels.push('critical');
	}

	return labels;
}