# Python solution for 2025-08-31
#Hex Generator
import random

def generate_hex(color):

    if color not in ('red', 'green', 'blue'):
        return 'Invalid color'

    dominant = random.randint(128, 255)

    if color == 'red':
        r = dominant
        g = random.randint(0, dominant - 1)
        b = random.randint(0, dominant - 1)

    elif color == 'green':
        g = dominant
        r = random.randint(0, dominant - 1)
        b = random.randint(0, dominant - 1)

    #blue
    else:
        b = dominant
        r = random.randint(0, dominant - 1)
        g = random.randint(0, dominant - 1)

    return f"{r:02X}{g:02X}{b:02X}"