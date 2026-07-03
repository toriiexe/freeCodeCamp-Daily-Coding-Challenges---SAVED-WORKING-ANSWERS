# Python solution for 2025-08-12
#Base Check
def is_valid_number(n, base):
    valid = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'[:base]
    for c in n.upper():
        if not c in valid:
            return False
    return True