# Python solution for 2026-03-12
# Domino Chain Validator
def is_valid_domino_chain(dominoes):
    for i in range(len(dominoes)-1):
        if dominoes[i][1] != dominoes[i+1][0]:
            return False
    return True