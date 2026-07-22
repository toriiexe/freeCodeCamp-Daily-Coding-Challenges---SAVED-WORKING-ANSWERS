# Python solution for 2026-05-07
# Longest Common Substring
def get_longest_substring(s):
    substring = ''

    for i in range(len(s)):
        for j in range(i, len(s)):
            sub = s[i:j+1]

            counter = 0
            for k in range(len(s) - len(sub) + 1):
                if s[k:k+len(sub)] == sub:
                    counter += 1

            if counter > 1 and len(sub) > len(substring):
                substring = sub

    return substring