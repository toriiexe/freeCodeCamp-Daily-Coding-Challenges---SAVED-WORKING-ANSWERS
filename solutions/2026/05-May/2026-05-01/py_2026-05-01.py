# Python solution for 2026-05-01
# Anagram Groups
def group_anagrams(words):
    res = []

    for word in words:
        found = False

        for group in res:
            if sorted(word) == sorted(group[0]):
                group.append(word)
                found = True
                break

        if not found:
            res.append([word])

    return res