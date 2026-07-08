# Python solution for 2026-07-08
# Issue Triage
def triage_issue(ms, message):
    days = ms//86_400_000
    has_bump = 'bump' in message.lower()
    return 'leave it' if days < 7 else 'close it' if has_bump else 'bump it'