# Python solution for 2025-08-11
#Vowel Balance
def is_balanced(s):
    fHalf, sHalf = 0, 0
    vowels = 'aeiouAEIOU'

    for i in range(len(s)//2):
        if s[i] in vowels:
            fHalf += 1
        if s[-(i+1)] in vowels:
            sHalf += 1

    return fHalf == sHalf