# Python solution for 2026-01-25
# Scaled Image
def scale_image(size, scale):
    w, h = map(int, size.split('x'))
    return f'{round(w*scale)}x{round(h*scale)}'