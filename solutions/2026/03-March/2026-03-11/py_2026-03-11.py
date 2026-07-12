# Python solution for 2026-03-11
# Word Length Converter
def convert_words(s):
    return ' '.join(str(len(w)) for w in s.split(' '))