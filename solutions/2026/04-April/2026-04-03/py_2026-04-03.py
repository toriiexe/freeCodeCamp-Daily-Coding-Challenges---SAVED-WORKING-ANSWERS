# Python solution for 2026-04-03
# Browser History
def get_browser_history(commands):
    history = []
    indx = -1

    for c in commands:
        if c == 'Back':
            if indx > 0:
                indx -= 1
        elif c == 'Forward':
            if indx < len(history) - 1:
                indx += 1
        else:
            history = history[:indx + 1]
            history.append(c)
            indx += 1

    return [history, indx]

print(get_browser_history(["freecodecamp.org", "freecodecamp.org/learn", "Back"]))