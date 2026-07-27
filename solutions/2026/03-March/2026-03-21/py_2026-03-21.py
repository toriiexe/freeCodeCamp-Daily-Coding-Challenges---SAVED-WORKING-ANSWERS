# Python solution for 2026-03-21
# QR Decoder
def rotate_right(matrix):
    return [''.join(x) for x in zip(*matrix[::-1])]

def decode_qr(qr_code):
	res = ''

	for i in range(4):
		if qr_code[0][0:2] == '11' and qr_code[0][4:6] == '11' and qr_code[1][0:2] == '11' and qr_code[1][4:6] == '11' and qr_code[4][0:2] == '11' and qr_code[5][0:2] == '11':
			res = qr_code[0][2:4] + qr_code[1][2:4] + qr_code[2] + qr_code[3] + qr_code[4][2:] + qr_code[5][2:]
			return res
		else:
			qr_code = rotate_right(qr_code)

	return res