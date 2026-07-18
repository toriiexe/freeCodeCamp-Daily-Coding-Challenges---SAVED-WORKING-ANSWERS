# Python solution for 2026-04-28
# Number Words
def get_number_words(n):
    ones = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ]

    tens = [
        '', '', 'twenty', 'thirty', 'forty',
        'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ]

    if n < 20:
        return ones[n]

    if n % 10 == 0:
        return tens[n // 10]

    return f'{tens[n // 10]}-{ones[n % 10]}'