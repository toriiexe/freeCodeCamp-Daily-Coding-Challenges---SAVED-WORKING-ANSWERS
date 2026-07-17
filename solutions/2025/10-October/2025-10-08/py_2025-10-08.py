# Python solution for 2025-10-08
# Space Week Day 5: Goldilocks Zone
def goldilocks_zone(mass):
    luminosity = mass**3.5
    luminosity_sqrt = luminosity**0.5

    start_of_the_zone = 0.95 * luminosity_sqrt
    end_of_the_zone = 1.37 * luminosity_sqrt
    
    return [round(start_of_the_zone, 2), round(end_of_the_zone, 2)]