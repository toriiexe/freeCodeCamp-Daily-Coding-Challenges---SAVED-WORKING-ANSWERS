# Python solution for 2025-11-30
# AI Detector
import re
def detect_ai(text):
    if text.count('-') >= 2:
        return 'AI'

    if len(re.findall(r'\([^)]*\)', text)) >= 2:
        return 'AI'

    long_words_counter = 0
    for word in text.split():
        w = re.sub('[^a-zA-Z]', '', word)
        if len(w) >= 7:
            long_words_counter += 1

    if long_words_counter >= 3:
        return 'AI'

    return 'Human'