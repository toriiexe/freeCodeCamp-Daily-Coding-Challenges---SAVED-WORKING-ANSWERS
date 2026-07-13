# Python solution for 2026-02-26
# Letter and Number Count
import re
def count_letters_and_numbers(s):
    letters_quantity = len(re.findall('[a-zA-Z]', s))
    letters_str = 'letters' if letters_quantity != 1 else 'letter'

    digits_quantity = len(re.findall('[0-9]', s))
    digits_str = 'numbers' if digits_quantity != 1 else 'number'

    return f'The string has {letters_quantity} {letters_str} and {digits_quantity} {digits_str}.'