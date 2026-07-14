# Python solution for 2026-04-13
# Name Initials
def get_initials(name):
    return '.'.join([n[0].upper() for n in name.split()]) + '.'