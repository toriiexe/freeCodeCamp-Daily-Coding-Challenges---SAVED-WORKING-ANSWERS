# Python solution for 2025-12-16
# Consonant Count
def has_consonant_count(text, target):
    return sum([1 for c in text if c.isalpha() and c not in 'aeiouAEIOU']) == target