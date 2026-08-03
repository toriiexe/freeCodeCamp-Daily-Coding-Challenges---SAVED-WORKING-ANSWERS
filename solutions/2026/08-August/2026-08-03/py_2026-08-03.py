# Python solution for 2026-08-03
# Emoji Translator
emoji = {
    '👶': 'baby',
    '🐱': 'cat',
    '🐕': 'dog',
    '🐟': 'fish',
    '🥵': 'hot',
    '🧊': 'ice',
    '🪨': 'rock',
    '🦈': 'shark',
    '🍲': 'soup',
    '⭐': 'star'
}

def get_emoji_phrase(s):
    return ' '.join(emoji[c] for c in s)