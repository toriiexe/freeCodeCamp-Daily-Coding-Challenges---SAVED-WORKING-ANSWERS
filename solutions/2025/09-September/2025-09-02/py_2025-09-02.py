# Python solution for 2025-09-02
# RGB to Hex
def rgb_to_hex(rgb):
    rgb = rgb.replace('rgb(', '').replace(')', '')
    r, g, b = map(int, rgb.split(', '))
    return f'#{r:02x}{g:02x}{b:02x}'