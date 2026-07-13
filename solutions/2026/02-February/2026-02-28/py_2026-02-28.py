# Python solution for 2026-02-28
# Add Punctuation
import re
def add_punctuation(sentences):
    return re.sub(r' (?=[A-Z])', '. ', sentences) + '.'