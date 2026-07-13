# Python solution for 2026-07-11
# Five Dice
def five_dice(dice):
    how_many_of_a_kind = [dice.count(i) for i in range(1, 7)]

    if 5 in how_many_of_a_kind:
        return 'five of a kind'

    if 4 in how_many_of_a_kind:
        return 'four of a kind'

    if 3 in how_many_of_a_kind and 2 in how_many_of_a_kind:
        return 'full house'

    if how_many_of_a_kind == [1,1,1,1,1,0] or how_many_of_a_kind == [0,1,1,1,1,1]:
        return 'large straight'

    if how_many_of_a_kind[:4] == [1,1,1,1] or how_many_of_a_kind[1:5] == [1,1,1,1] or how_many_of_a_kind[2:] == [1,1,1,1]:
        return 'small straight'

    if how_many_of_a_kind.count(3) == 1:
        return 'three of a kind'

    if how_many_of_a_kind.count(2) == 2:
        return 'two pair'

    if how_many_of_a_kind.count(2) == 1:
        return 'pair'

    return 'no pair'

"""
# Five Dice - ANOTHER APPROACH
def five_dice(dice):
    counts = [dice.count(i) for i in range(1, 7)]
    sorted_counts = sorted(counts, reverse=True)

    if sorted_counts[0] == 5:
        return 'five of a kind'

    if sorted_counts[0] == 4:
        return 'four of a kind'

    if sorted_counts[:2] == [3, 2]:
        return 'full house'

    if counts == [1, 1, 1, 1, 1, 0] or counts == [0, 1, 1, 1, 1, 1]:
        return 'large straight'

    if counts[:4] == [1, 1, 1, 1] or counts[1:5] == [1, 1, 1, 1] or counts[2:] == [1, 1, 1, 1]:
        return 'small straight'

    if sorted_counts[0] == 3:
        return 'three of a kind'

    if sorted_counts[:2] == [2, 2]:
        return 'two pair'

    if sorted_counts[0] == 2:
        return 'pair'

    return 'no pair'
"""