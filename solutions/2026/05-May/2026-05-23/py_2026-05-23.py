# Python solution for 2026-05-23
# Open Issues
def get_open_issues(issues, prs):
    result = []

    for issue in issues:
        closed = False

        for pr in prs:
            issue_str = str(issue)
            pr_str = str(pr)

            if issue_str == pr_str:
                continue

            issue_norm = issue_str.lstrip('0') or '0'
            pr_norm = pr_str.lstrip('0') or '0'

            length = max(len(issue_norm), len(pr_norm))
            issue_norm = issue_norm.zfill(length)
            pr_norm = pr_norm.zfill(length)

            if pr_norm in (issue_norm + issue_norm):
                closed = True
                break

        if not closed:
            result.append(issue)

    return result