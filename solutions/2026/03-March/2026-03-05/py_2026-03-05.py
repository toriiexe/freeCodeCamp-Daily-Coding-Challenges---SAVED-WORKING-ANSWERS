# Python solution for 2026-03-05
# Smallest Gap
def smallest_gap(s):
	length = float('inf')
	res = ''

	for i in range(len(s)):
		for j in range(i + 1, len(s)):
			if s[i] == s[j]:
				gap = s[i + 1:j]

				if len(gap) < length:
					length = len(gap)
					res = gap

				break

	return res