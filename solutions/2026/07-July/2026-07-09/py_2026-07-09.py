# Python solution for 2026-07-09
# Issue Triage 2
def triage_issue(title, labels):
    if not labels:
        if 'error' in title or 'bug' in title:
            labels.extend(['bug', 'needs triage'])
        elif 'feature' in title or 'add' in title:
            labels.extend(['enhancement', 'discussing'])
    else:
        if 'needs triage' in labels and ('simple' in title or 'easy' in title):
            labels.remove('needs triage')
            labels.append('good first issue')
        elif 'discussing' in labels and ('planned' in title or 'next' in title):
            labels.remove('discussing')
            labels.append('on the roadmap')
        elif 'needs triage' in labels or 'discussing' in labels:
            if 'needs triage' in labels:
                labels.remove('needs triage')
            if 'discussing' in labels:
                labels.remove('discussing')
            labels.append('help wanted')

    if 'security' in title:
        labels.append('critical')

    return labels