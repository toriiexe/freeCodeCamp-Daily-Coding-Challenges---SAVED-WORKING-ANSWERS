# Python solution for 2025-10-14
# String Count
def count(text, parameter):
    count = 0

    text_len = len(text)
    par_len = len(parameter)

    if text_len >= par_len:
        for i in range(text_len - par_len + 1):
            if text[i:i + par_len] == parameter:
                count += 1

    return count