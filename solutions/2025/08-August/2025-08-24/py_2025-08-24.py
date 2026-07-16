# Python solution for 2025-08-24
# Character Battle
def battle(my_army, opposing_army):
    if len(my_army) > len(opposing_army):
        return 'Opponent retreated'
    if len(my_army) < len(opposing_army):
        return 'We retreated'

    values = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

    my_wins = opp_wins = 0

    for m, o in zip(my_army, opposing_army):
        m_val = values.index(m) + 1 if m in values else int(m) if m.isdigit() else 0
        o_val = values.index(o) + 1 if o in values else int(o) if o.isdigit() else 0

        if m_val > o_val:
            my_wins += 1
        elif o_val > m_val:
            opp_wins += 1

    if my_wins > opp_wins:
        return 'We won'
    elif opp_wins > my_wins:
        return 'We lost'
    return 'It was a tie'