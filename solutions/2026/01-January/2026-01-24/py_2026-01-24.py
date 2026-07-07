# Python solution for 2026-01-24
# Bingo! Letter
def get_bingo_letter(n):
    #if not 1 <= n <= 75:
     #   return 'Invalid value'
    return "BINGO"[(n - 1) // 15]