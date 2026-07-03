# Python solution for 2026-05-24
# Roman Numeral Fixer
def toDecimal(roman):
    values = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    return sum(values[c] for c in roman)

def toRoman(n):
    roman = [
        (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
        (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'),
        (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
    ]
    s = ''    
    for v, l in roman:
        while n >= v:
            s += l
            n -= v    
    return s



def fix_numerals(s):
    return toRoman(toDecimal(s))