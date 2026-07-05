# Python solution for 2026-05-12
# Character Frequency
def get_frequency(s):
    freq = {}
    for c in s:
        if c in freq:
            freq[c] += 1
        else:
            freq[c] = 1
    return freq