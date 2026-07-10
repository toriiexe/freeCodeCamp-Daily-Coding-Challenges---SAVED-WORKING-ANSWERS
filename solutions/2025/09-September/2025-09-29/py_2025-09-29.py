# Python solution for 2025-09-29
# Longest Word
def get_longest_word(sentence):
    s = sentence.replace('.', '')
    the_longest_word = ''

    for word in s.split():
        if len(word) > len(the_longest_word):
            the_longest_word = word

    return the_longest_word


"""
# Longest Word - SHORTER VERSION
# def get_longest_word(sentence):
    return max(sentence.replace('.', '').split(), key=len) 
"""