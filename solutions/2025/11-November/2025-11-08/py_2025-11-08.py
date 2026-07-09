# Python solution for 2025-11-08
# Character Limit
def can_post(message):
    length = len(message)
    if length <= 40:
        return 'short post'
    elif length <= 80:
        return 'long post'
    else:
        return 'invalid post'