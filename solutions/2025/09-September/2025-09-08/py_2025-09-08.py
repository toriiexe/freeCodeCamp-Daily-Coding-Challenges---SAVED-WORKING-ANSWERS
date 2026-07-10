# Python solution for 2025-09-08
# Acronym Builder
def build_acronym(s):
    forbidden = {"a", "for", "an", "and", "by", "of"}

    acronym = ""
    for i, word in enumerate(s.split()):
        if i == 0 or word.lower() not in forbidden:
            acronym += word[0].upper()

    return acronym