# Python solution for 2026-05-30
# Best Hand
def get_best_hand(cards): 
    ranks = [c[0] for c in cards]
    suits = [c[1] for c in cards]

    ranks_string = '23456789TJQKA'

    ranks_counter = {
        '2': 0,
        '3': 0,
        '4': 0,
        '5': 0,
        '6': 0,
        '7': 0,
        '8': 0,
        '9': 0,
        'T': 0,
        'J': 0,
        'Q': 0,
        'K': 0,
        'A': 0
    }
    for rank in ranks:
        ranks_counter[rank] += 1

    suits_counter = {
        'h': 0,
        'd': 0,
        'c': 0,
        's': 0
    }
    for suit in suits:
        suits_counter[suit] += 1

    if 5 in suits_counter.values():

        if {'A', 'K', 'Q', 'J', 'T'} == set(ranks):
            return 'Royal Flush'

        for r in range(len(ranks_string)-4):
            if ranks_counter[ranks_string[r]] == 1 and ranks_counter[ranks_string[r+1]] == 1 and ranks_counter[ranks_string[r+2]] == 1 and ranks_counter[ranks_string[r+3]] == 1 and ranks_counter[ranks_string[r+4]] == 1:
                return 'Straight Flush'

        if ranks_counter['A'] == 1 and ranks_counter['2'] == 1 and ranks_counter['3'] == 1 and ranks_counter['4'] == 1 and ranks_counter['5'] == 1:
            return 'Straight Flush'

        return 'Flush'

    if 4 in ranks_counter.values():
        return 'Four of a Kind'

    if 3 in ranks_counter.values() and 2 in ranks_counter.values():
        return 'Full House'

    if 3 in ranks_counter.values():
        return 'Three of a Kind'

    for r in range(len(ranks_string)-4):
        if ranks_counter[ranks_string[r]] == 1 and ranks_counter[ranks_string[r+1]] == 1 and ranks_counter[ranks_string[r+2]] == 1 and ranks_counter[ranks_string[r+3]] == 1 and ranks_counter[ranks_string[r+4]] == 1:
            return 'Straight'

    if ranks_counter['A'] == 1 and ranks_counter['2'] == 1 and ranks_counter['3'] == 1 and ranks_counter['4'] == 1 and ranks_counter['5'] == 1:
        return 'Straight'

    if 2 in ranks_counter.values():
        pairs = list(ranks_counter.values()).count(2)

        if pairs == 2:
            return 'Two Pair'

        return 'Pair'

    return 'High Card'