# Python solution for 2026-01-12
# Plant the Crop
def get_number_of_plants(field_size, unit, crop):
    crops = {
        'corn': 1,
        'wheat': 0.1,
        'soybeans': 0.5,
        'tomatoes': 0.25,
        'lettuce': 0.2
    }

    sqrt_m = field_size * 4_046.86 if unit == 'acres' else field_size * 10_000

    return int(sqrt_m / crops[crop])