# Python solution for 2025-08-22
#Message Decoder
def decode(message, shift):
    alphaU = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    alphaL = 'abcdefghijklmnopqrstuvwxyz'
    s = ''

    for c in message:
        if c.isalpha() and c.isupper():
            s += alphaU[(alphaU.index(c) - shift) % 26]
        elif c.isalpha() and c.islower():
            s += alphaL[(alphaL.index(c) - shift) % 26]
        else:
            s += c

    return s