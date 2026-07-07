# Python solution for 2026-06-08
# Jet Lagged
def get_jet_lag_hours(departure_city, arrival_city, flight_duration, direction):

    timezone_diff = {
        'Los Angeles': -8,
        'New York': -5,
        'London': 0,
        'Istanbul': 3,
        'Dubai': 4,
        'Hong Kong': 8,
        'Tokyo': 9
    }

    direction_multiplier = 1.5 if direction == 'east' else 1.0

    return round(abs(timezone_diff[arrival_city] - timezone_diff[departure_city]) + (flight_duration * 0.1) * direction_multiplier,1)