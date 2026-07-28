# Python solution for 2026-02-27
# Matrix Shift
def shift_matrix(matrix, shift):
	res = [[0 for col in range(len(matrix[row]))] for row in range(len(matrix))]

	rows = len(matrix)
	cols = len(matrix[0])

	s = shift % (rows * cols)

	for r in range(rows):
		for c in range(cols):
			index = r * cols + c
			new_index = (index + s) % (rows * cols)

			res_r = new_index // cols
			res_c = new_index % cols

			res[res_r][res_c] = matrix[r][c]

	return res