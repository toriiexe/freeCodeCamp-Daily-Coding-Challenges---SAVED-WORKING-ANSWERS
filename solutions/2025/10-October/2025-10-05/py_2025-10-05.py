# Python solution for 2025-10-05
# Exoplanet Search
def has_exoplanet(readings):
    total = 0
    values = []

    for reading in readings:
        if reading.isalnum():
            if reading.isdigit():
                value = int(reading)
            elif reading.isupper():
                value = ord(reading) - ord('A') + 10
            else:
                continue

            total += value
            values.append(value)

    if not values:
        return False

    average = total / len(values)

    return any(value <= average * 0.8 for value in values)