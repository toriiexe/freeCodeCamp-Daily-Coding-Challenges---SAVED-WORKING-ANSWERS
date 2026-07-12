# Python solution for 2026-03-07
# Element Size
def get_element_size(window_size, element_vw, element_vh):
    w, h = map(int, window_size.split(' x '))
    vw = int(element_vw[:-2])
    vh = int(element_vh[:-2])

    return f'{w * vw // 100} x {h * vh // 100}'