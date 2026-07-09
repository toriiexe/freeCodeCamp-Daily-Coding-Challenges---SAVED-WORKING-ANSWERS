# Python solution for 2025-11-16
# Rectangle Count
def count_rectangles(width, height):
    return (width*(width + 1)//2) * (height*(height+1)//2)