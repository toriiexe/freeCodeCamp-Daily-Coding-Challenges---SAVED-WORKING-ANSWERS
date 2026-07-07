# Python solution for 2026-06-05
# Schema Validator Part 5
def is_valid_schema(obj):
    Roles = ['user', 'creator', 'moderator', 'staff', 'admin']
    supporter = "supporter" in obj
    return ('username' in obj and isinstance(obj['username'], str)) and ('posts' in obj and isinstance(obj['posts'], int) and not isinstance(obj['posts'], bool)) and ('verified' in obj and isinstance(obj['verified'], bool)) and ('role' in obj and obj['role'] in Roles) and (not supporter or isinstance(obj['supporter'], bool)) and ('badges' in obj and isinstance(obj["badges"], list) and all(isinstance(badge, str) for badge in obj["badges"]))
