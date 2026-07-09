// JavaScript solution for 2025-10-03
// P@ssw0rd Str3ngth!
function checkStrength(password) {
	let passed = 0;

	if (password.length >= 8) passed++;

	if (/[a-z]/.test(password) && /[A-Z]/.test(password)) passed++;

	if (/[0-9]/.test(password)) passed++;

	if (/[!@#$%^&*]/.test(password)) passed++;

	if (passed < 2) return 'weak';
	if (passed < 4) return 'medium';
	return 'strong';
}