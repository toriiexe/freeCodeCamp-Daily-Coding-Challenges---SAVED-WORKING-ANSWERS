# Python solution for 2026-05-20
# String Zipper
def zip_strings(a, b):
    result = "".join(cA + cB for cA, cB in zip(a, b))
    return result + a[len(b):] + b[len(a):]