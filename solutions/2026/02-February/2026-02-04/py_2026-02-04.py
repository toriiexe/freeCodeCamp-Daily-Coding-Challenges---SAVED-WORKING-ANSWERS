# Python solution for 2026-02-04
# Truncate the Text
def truncate_text(text):
    return text if len(text) <= 20 else text[:17] + '...'