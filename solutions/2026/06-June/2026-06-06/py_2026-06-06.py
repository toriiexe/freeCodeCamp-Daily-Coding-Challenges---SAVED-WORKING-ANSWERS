# Python solution for 2026-06-06
# Schema Validator Part 6
def is_valid_schema(obj):
    Roles = ['user', 'creator', 'moderator', 'staff', 'admin']
    
    def is_valid_user(user):
        supporter = "supporter" in user
        return ('username' in user and isinstance(user['username'], str)) and ('posts' in user and isinstance(user['posts'], int) and not isinstance(user['posts'], bool)) and ('verified' in user and isinstance(user['verified'], bool)) and ('role' in user and user['role'] in Roles) and (not supporter or isinstance(user['supporter'], bool)) and ('badges' in user and isinstance(user["badges"], list) and all(isinstance(badge, str) for badge in user["badges"]))

    return ('users' in obj and isinstance(obj['users'], list) and all(is_valid_user(user) for user in obj['users']))