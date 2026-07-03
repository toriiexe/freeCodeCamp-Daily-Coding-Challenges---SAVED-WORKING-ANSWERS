# Python solution for 2025-08-16
#Anagram Checker
def are_anagrams(str1, str2):
    return sorted(str1.lower()) == sorted(str2.lower())