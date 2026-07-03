# Python solution for 2026-07-01
#Lucky Number
def get_lucky_number(name):
    firstName, lastName = name.lower().split()

    fnV = sum(1 for ch in firstName if ch in 'aeiou')
    fnC = sum(1 for ch in firstName if ch.isalpha() and ch not in 'aeiou')

    lnV = sum(1 for ch in lastName if ch in 'aeiou')
    lnC = sum(1 for ch in lastName if ch.isalpha() and ch not in 'aeiou')

    smallerV = min(fnV, lnV) * min(fnC, lnC) * min(len(firstName), len(lastName))
    largerV = max(fnV, lnV) * max(fnC, lnC) * max(len(firstName), len(lastName))

    result = largerV - smallerV
    return result if result != 0 else 13