# Python solution for 2025-11-01
# Signature Validation
def verify(message, key, signature):
    s = 0

    for ch in message + key:
        if ch.isalpha():
            if ch.islower():
                s += ord(ch) - ord('a') + 1
            else:
                s += ord(ch) - ord('A') + 27

    return s == signature