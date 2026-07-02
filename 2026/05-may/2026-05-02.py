#Deepest Brackets
def get_deepest_brackets(s):

    maxLevel = 0
    level = 0

    for c in s:
        if c in '({[':
            level += 1
            if level > maxLevel:
                maxLevel = level
        elif c in ')]}':
            level -= 1

    level = 0
    temp = ''
    res = ''

    for c in s:
        if c in '({[':
            level += 1
            temp = ''

        elif c in ')]}':
            if level == maxLevel:
                res = temp
                return res
            level -= 1

        else:
            if level == maxLevel:
                temp += c

    return res