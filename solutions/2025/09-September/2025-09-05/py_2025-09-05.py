# Python solution for 2025-09-05
# IPv4 Validator
def is_valid_ipv4(ipv4):
    parts = ipv4.split('.')

    if len(parts) != 4:
        return False

    for part in parts:
        if not part.isdigit() or (part != '0' and part.startswith('0')):
            return False

        if not 0 <= int(part) <= 255:
            return False

    return True