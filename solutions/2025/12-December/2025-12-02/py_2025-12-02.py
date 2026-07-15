# Python solution for 2025-12-02
# Camel to Snake
import re
def to_snake(camel):
    return re.sub(r'(?=[A-Z])', '_', camel).lower()


# return re.sub(r'(?<!^)(?=[A-Z])', '_', camel).lower() # Prevents adding a leading underscore if the string starts with an uppercase letter.