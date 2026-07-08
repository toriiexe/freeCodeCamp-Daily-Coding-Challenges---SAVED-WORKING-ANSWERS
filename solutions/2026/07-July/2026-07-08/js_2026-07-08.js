// JavaScript solution for 2026-07-08
// Issue Triage
function triageIssue(ms, message) {
    const days = ms / 86400000;
    const hasBump = message.toLowerCase().includes('bump');
    if (days < 7) return 'leave it';
    if (hasBump) return 'close it';
    return 'bump it';
}