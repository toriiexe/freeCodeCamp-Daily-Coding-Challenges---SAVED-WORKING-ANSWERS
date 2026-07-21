// JavaScript solution for 2025-12-23
// Re: Fwd: Fw: Count
function emailChainCount(subject) {
    const s = subject.toLowerCase();

    return (s.match(/fw:/g) || []).length + (s.match(/fwd:/g) || []).length + (s.match(/re:/g) || []).length;
}