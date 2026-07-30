# Python solution for 2025-10-28
# Navigator
def navigate(commands):
    history = ['Home']
    indx = 0

    for c in commands:
        if c == 'Back':
            if indx > 0:
                indx -= 1
        elif c == 'Forward':
            if indx < len(history) - 1:
                indx += 1
        else:
            history = history[:indx + 1]
            history.append(c[6:])
            indx += 1

    return history[indx]