# Python solution for 2025-10-22
# Speak Wisely, You Must
def wise_speak(sentence):
    words = sentence[:-1].split()

    targets = ['have', 'must', 'are', 'will', 'can']
    idx = next(i for i, word in enumerate(words) if word.lower() in targets)

    first_half = [word for word in words[idx+1:]]
    second_half = [word.lower() for word in words[:idx+1]]

    return ' '.join(first_half).capitalize() + ', ' + ' '.join(second_half) + sentence[-1]