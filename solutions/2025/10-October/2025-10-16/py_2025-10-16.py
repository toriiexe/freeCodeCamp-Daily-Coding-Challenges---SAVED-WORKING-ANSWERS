# Python solution for 2025-10-16
# Email Validator
import re
def validate(email):
    if email.count('@') != 1:
        return False

    local, domain = email.split('@')

    if not local or not domain:
        return False

    if not re.fullmatch(r'[A-Za-z0-9._-]+', local):
        return False

    if local.startswith('.') or local.endswith('.'):
        return False

    if '..' in local or '..' in domain:
        return False

    if not re.fullmatch(r'[^.]+(\.[^.]+)*\.[A-Za-z]{2,}', domain):
        return False

    return True