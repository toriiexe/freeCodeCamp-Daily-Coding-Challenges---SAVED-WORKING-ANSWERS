# Python solution for 2025-10-03
# P@ssw0rd Str3ngth!
def check_strength(password):
    passed = 0

    if len(password) >= 8:
        passed += 1

    if any(chr(97 + i) in password for i in range(26)) and any(chr(65 + i) in password for i in range(26)):
        passed += 1

    if any(str(i) in password for i in range(10)):
        passed += 1

    if any(c in password for c in '!@#$%^&*'):
        passed += 1

    if passed < 2:
        return 'weak'
    elif passed < 4:
        return 'medium'
    else:
        return 'strong'