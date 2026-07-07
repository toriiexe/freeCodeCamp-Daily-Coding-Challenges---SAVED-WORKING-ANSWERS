# Python solution for 2025-12-14
# Capitalize It
def title_case(title):
    return ' '.join([word[0].upper() + word[1:].lower() for word in title.split()])


""" Capitalize It - WITH ONE STRING METHOD
def title_case(t):
    return t.title()
"""