# Python solution for 2025-11-04
# Image Search
def image_search(images, term):
    term = term.lower()
    return [image for image in images if term in image.lower()]