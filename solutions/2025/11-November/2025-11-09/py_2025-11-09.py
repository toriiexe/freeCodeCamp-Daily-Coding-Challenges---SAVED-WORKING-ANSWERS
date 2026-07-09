# Python solution for 2025-11-09
# Word Search
def find_word(matrix, word):
    for r, row in enumerate(matrix):
        row = ''.join(row)

        if word in row:
            s = row.index(word)
            return [[r, s], [r, s + len(word) - 1]]

        if word[::-1] in row:
            s = row.index(word[::-1])
            return [[r, s + len(word) - 1], [r, s]]

    for c in range(len(matrix[0])):
        col = ''.join(matrix[r][c] for r in range(len(matrix)))

        if word in col:
            s = col.index(word)
            return [[s, c], [s + len(word) - 1, c]]

        if word[::-1] in col:
            s = col.index(word[::-1])
            return [[s + len(word) - 1, c], [s, c]]