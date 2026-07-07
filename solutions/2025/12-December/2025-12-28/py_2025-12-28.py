# Python solution for 2025-12-28
# SCREAMING_SNAKE_CASE
import re
def to_screaming_snake_case(variable_name):
    variable_name = variable_name.replace("-", "_")
    variable_name = re.sub(r'(?<!^)([A-Z])', r'_\1', variable_name)
    return variable_name.upper()