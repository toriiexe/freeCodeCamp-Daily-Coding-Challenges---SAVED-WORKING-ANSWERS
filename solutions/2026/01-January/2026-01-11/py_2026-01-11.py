# Python solution for 2026-01-11
# Par for the Hole
def golf_score(par, strokes):
    if strokes == 1:
        return 'Hole in one!'
    elif strokes == par - 2:
        return 'Eagle'
    elif strokes == par - 1:
        return 'Birdie'
    elif par == strokes:
        return 'Par'
    elif strokes == par + 1:
        return 'Bogey'
    elif strokes == par + 2:
        return 'Double bogey'