# Python solution for 2025-12-11
# Roman Numeral Builder
def to_roman(num):
    roman = [
        (1000, 'M'), (900, 'CM'), (500, 'D'), (400, 'CD'),
        (100, 'C'), (90, 'XC'), (50, 'L'), (40, 'XL'),
        (10, 'X'), (9, 'IX'), (5, 'V'), (4, 'IV'), (1, 'I')
    ]
    s = ''    
    for v, l in roman:
        while num >= v:
            s += l
            num -= v    
    return s