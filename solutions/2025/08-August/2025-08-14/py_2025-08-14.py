# Python solution for 2025-08-14
#S P A C E J A M
def space_jam(s):
    s = s.replace(' ', '')
    res = ''
    
    for c in s:
        res += c.upper() + '  '
    
    return res.rstrip()