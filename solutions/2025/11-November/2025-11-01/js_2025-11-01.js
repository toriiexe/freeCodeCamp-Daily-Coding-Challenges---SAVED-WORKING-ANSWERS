// JavaScript solution for 2025-11-01
// Signature Validation
function verify(message, key, signature) {
	let s = 0;

	for (const ch of message + key) {
		if ('A' <= ch && ch <= 'Z') {
			s += ch.charCodeAt(0) - 65 + 27;
		} else if ('a' <= ch && ch <= 'z') {
			s += ch.charCodeAt(0) - 97 + 1;
		}
	}

	return s === signature;
}