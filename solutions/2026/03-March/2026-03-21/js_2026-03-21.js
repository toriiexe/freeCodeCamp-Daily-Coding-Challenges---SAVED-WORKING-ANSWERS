// JavaScript solution for 2026-03-21
// QR Decoder
function rotateRight(matrix) {
	return matrix[0].split('').map((_, i) => matrix.map(row => row[i]).reverse().join(''));
}

function decodeQr(qrCode) {
	let res = '';

	for (let i = 0; i < 4; i++) {
		if (qrCode[0].slice(0, 2) === '11' && qrCode[0].slice(4, 6) === '11' && qrCode[1].slice(0, 2) === '11' && qrCode[1].slice(4, 6) === '11' && qrCode[4].slice(0, 2) === '11' && qrCode[5].slice(0, 2) === '11') {
			res = qrCode[0].slice(2, 4) + qrCode[1].slice(2, 4) + qrCode[2] + qrCode[3] + qrCode[4].slice(2) + qrCode[5].slice(2);
			return res;
		} else {
			qrCode = rotateRight(qrCode);
		}
	}

	return res;
}