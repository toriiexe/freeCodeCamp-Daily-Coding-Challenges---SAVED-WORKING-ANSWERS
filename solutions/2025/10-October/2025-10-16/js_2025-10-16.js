// JavaScript solution for 2025-10-16
// Email Validator
function validate(email) {
    if ((email.match(/@/g) || []).length !== 1) {
        return false;
    }

    const [local, domain] = email.split("@");

    if (!local || !domain) {
        return false;
    }

    if (!/^[A-Za-z0-9._-]+$/.test(local)) {
        return false;
    }

    if (local.startsWith(".") || local.endsWith(".")) {
        return false;
    }

    if (local.includes("..") || domain.includes("..")) {
        return false;
    }

    if (!/^[^.]+(\.[^.]+)*\.[A-Za-z]{2,}$/.test(domain)) {
        return false;
    }

    return true;
}