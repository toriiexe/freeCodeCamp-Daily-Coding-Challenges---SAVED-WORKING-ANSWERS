# Python solution for 2026-07-30
# Contrast Rating 3
def get_contrast_rating(rgb1, rgb2, is_large_text):
    arr1 = rgb1[:]
    arr2 = rgb2[:]

    for i in range(3):
        arr1[i] /= 255

        if arr1[i] <= 0.04045:
            arr1[i] /= 12.92
        else:
            arr1[i] = ((arr1[i] + 0.055) / 1.055) ** 2.4

        arr2[i] /= 255

        if arr2[i] <= 0.04045:
            arr2[i] /= 12.92
        else:
            arr2[i] = ((arr2[i] + 0.055) / 1.055) ** 2.4

    lum1 = 0.2126 * arr1[0] + 0.7152 * arr1[1] + 0.0722 * arr1[2]
    lum2 = 0.2126 * arr2[0] + 0.7152 * arr2[1] + 0.0722 * arr2[2]

    contrast = (lum1 + 0.05) / (lum2 + 0.05)

    if contrast >= (4.5 if is_large_text else 7.0):
        return 'AAA'
    if contrast >= (3.0 if is_large_text else 4.5):
        return 'AA'
    return 'Fail'