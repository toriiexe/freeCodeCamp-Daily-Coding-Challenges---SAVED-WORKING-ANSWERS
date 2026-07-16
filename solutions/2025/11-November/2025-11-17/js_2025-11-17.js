// JavaScript solution for 2025-11-17
// Fingerprint Test
function isMatch(fingerprintA, fingerprintB) {
    if (typeof fingerprintA !== 'string' || typeof fingerprintB !== 'string') {
        return false;
    }

    if (fingerprintA.length !== fingerprintB.length) {
        return false;
    }

    let differences = 0;

    for (let i = 0; i < fingerprintA.length; i++) {
        if (fingerprintA[i] !== fingerprintB[i]) {
            differences++;
        }
    }

    return differences / fingerprintA.length <= 0.1;
}