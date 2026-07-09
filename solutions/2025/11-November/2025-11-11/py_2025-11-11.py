# Python solution for 2025-11-11
# Vowels and Consonants
def count(s):
    vowels, consonants = 0, 0
    for ch in s.lower():
        if ch.isalpha():
            if ch in 'aeiou':
                vowels += 1
            else:
                consonants += 1
    return [vowels, consonants]