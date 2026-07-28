# Python solution for 2026-03-06
# Trail Traversal
def navigate_trail(trails):
	m = [list(row) for row in trails]
	loc = [0, 0]

	for r in range(len(m)):
		if 'C' in m[r]:
			loc = [r, m[r].index('C')]

	res = ''
	old = None

	while True:
		r, c = loc

		right = [r, c + 1]
		down = [r + 1, c]
		left = [r, c - 1]
		up = [r - 1, c]

		for pos, move in [(right, 'R'), (down, 'D'), (left, 'L'), (up, 'U')]:
			if 0 <= pos[0] < len(m) and 0 <= pos[1] < len(m[0]) and pos != old and m[pos[0]][pos[1]] in ['T', 'G']:
				res += move

				if m[pos[0]][pos[1]] == 'G':
					return res

				old = loc
				loc = pos
				break