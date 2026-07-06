# Python solution for 2026-06-03
# Schema Validator Part 3
def is_valid_schema(obj):
    Roles = ['user', 'creator', 'moderator', 'staff', 'admin']
    return ('username' in obj and isinstance(obj['username'], str)) and ('posts' in obj and isinstance(obj['posts'], int)) and ('verified' in obj and isinstance(obj['verified'], bool)) and ('role' in obj and obj['role'] in Roles)