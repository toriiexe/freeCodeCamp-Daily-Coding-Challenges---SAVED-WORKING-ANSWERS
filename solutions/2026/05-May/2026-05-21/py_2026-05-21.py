# Python solution for 2026-05-21
# I Before E

"""
Python RegEx - Lookbehinds
(?<=pattern) - Matches text only if it is immediately preceded by the given pattern, without including that pattern in the matched result.
(?<!pattern) - Matches text only if it is not immediately preceded by the given pattern.
"""
import re
def i_before_e(sentence):
    sentence = re.sub(r'(?<!c)ei', 'ie', sentence) #not preceded by 'c'
    sentence = re.sub(r'(?<=c)ie', 'ei', sentence) #preceded by 'c'
    return sentence