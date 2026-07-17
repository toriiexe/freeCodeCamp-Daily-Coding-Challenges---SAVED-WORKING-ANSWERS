# Python solution for 2025-11-12
# Email Signature Generator
def generate_signature(name, title, company):
    if 'A' <= name[0].upper() <= 'I':
        prefix = '>>'
    elif 'J' <= name[0].upper() <= 'R':
        prefix = '--'
    elif 'S' <= name[0].upper() <= 'Z':
        prefix = '::'

    return f'{prefix}{name}, {title} at {company}'