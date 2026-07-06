# Python solution for 2026-06-02
# Schema Validator Part 2
def is_valid_schema(obj):
    return ('username' in obj and isinstance(obj['username'], str)) and ('posts' in obj and isinstance(obj['posts'], int) and not isinstance(obj['posts'], bool)) and ('verified' in obj and isinstance(obj['verified'], bool))