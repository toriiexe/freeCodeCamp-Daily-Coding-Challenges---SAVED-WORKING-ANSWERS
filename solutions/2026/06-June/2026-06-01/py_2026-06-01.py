# Python solution for 2026-06-01
# Schema Validator Part 1
def is_valid_schema(obj):
    return 'username' in obj and isinstance(obj['username'], str)