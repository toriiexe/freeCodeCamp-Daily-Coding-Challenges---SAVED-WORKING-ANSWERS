# Python solution for 2026-06-30
#Duplicate Character Count
def duplicate_character_count(str1, str2):
    unique = set(str1)
    return sum(ch in unique for ch in str2)