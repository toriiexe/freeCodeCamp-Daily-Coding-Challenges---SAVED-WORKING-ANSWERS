# Python solution for 2025-08-26
# Reverse Parenthesis
def decode(s):
    stack = ['']

    for ch in s:
        if ch == '(':
            stack.append('')
        elif ch == ')':
            temp = stack.pop()[::-1]
            stack[-1] += temp
        else:
            stack[-1] += ch

    return stack[0]