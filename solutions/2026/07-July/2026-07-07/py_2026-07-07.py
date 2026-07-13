# Python solution for 2026-07-07
# Nearest Multiple
def round_to_nearest_multiple(num, multiple):
    first_endpoint = num - num % multiple
    second_endpoint = first_endpoint + multiple
    
    if num - first_endpoint < second_endpoint - num:
        return first_endpoint
    else:
        return second_endpoint