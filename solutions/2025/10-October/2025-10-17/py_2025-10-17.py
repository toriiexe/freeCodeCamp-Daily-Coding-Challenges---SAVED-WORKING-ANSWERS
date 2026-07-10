# Python solution for 2025-10-17
# Credit Card Masker
import re
def mask(card):
    return re.sub(r'\d{4}', '****', card, 3)