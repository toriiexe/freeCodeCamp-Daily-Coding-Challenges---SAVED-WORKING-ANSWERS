# Python solution for 2026-05-25
# Secret Number
def guess_number(secret, guess):
    return 'higher' if secret > guess else 'lower' if secret < guess else 'you got it!'