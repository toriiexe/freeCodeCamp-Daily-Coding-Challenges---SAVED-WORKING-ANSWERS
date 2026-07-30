# Python solution for 2026-05-16
# Longest Domino Chain
def dfs_domino(current_end, available_dominoes, actual_chain, best_chain):
    if len(actual_chain) > len(best_chain[0]):
        best_chain[0] = list(actual_chain)

    for i, domino in enumerate(available_dominoes):
        if current_end == domino[0]:
            next_end = domino[1]
            new_domino_in_chain = domino
        elif current_end == domino[1]:
            next_end = domino[0]
            new_domino_in_chain = [domino[1], domino[0]]
        else:
            continue

        rest = available_dominoes[:i] + available_dominoes[i + 1:]

        actual_chain.append(new_domino_in_chain)
        dfs_domino(next_end, rest, actual_chain, best_chain)

        actual_chain.pop()

def get_longest_chain(dominoes):
    best_chain = [[]]

    for i, domino in enumerate(dominoes):
        rest = dominoes[:i] + dominoes[i + 1:]

        dfs_domino(domino[1], rest, [domino], best_chain)
        dfs_domino(domino[0], rest, [[domino[1], domino[0]]], best_chain)

    return best_chain[0]