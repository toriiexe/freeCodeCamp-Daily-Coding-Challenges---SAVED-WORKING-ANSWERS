# Python solution for 2026-06-10
# Itinerary Arrangements
from math import factorial as fact
def get_itinerary_count(stops):
    len_of_stops = len(stops)
    return fact(len_of_stops) * (2 * len_of_stops - 3)