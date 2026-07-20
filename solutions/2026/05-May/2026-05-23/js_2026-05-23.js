// JavaScript solution for 2026-05-23
// Open Issues
function getOpenIssues(issues, prs) {
    const result = [];

    for (const issue of issues) {
        let closed = false;

        for (const pr of prs) {
            const issueStr = String(issue);
            const prStr = String(pr);

            if (issueStr === prStr) {
                continue;
            }

            let issueNorm = issueStr.replace(/^0+/, '') || '0';
            let prNorm = prStr.replace(/^0+/, '') || '0';

            const length = Math.max(issueNorm.length, prNorm.length);
            issueNorm = issueNorm.padStart(length, '0');
            prNorm = prNorm.padStart(length, '0');

            if ((issueNorm + issueNorm).includes(prNorm)) {
                closed = true;
                break;
            }
        }

        if (!closed) {
            result.push(issue);
        }
    }

    return result;
}