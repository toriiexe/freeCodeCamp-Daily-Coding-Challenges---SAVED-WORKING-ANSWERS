# Python solution for 2026-07-19
# Elevator Stops
def elevator_stops(current_floor, stops):
    all_floors = list(stops)
    
    if current_floor not in all_floors:
        all_floors.append(current_floor)
        
    all_floors.sort()
    curr_floor_indx = all_floors.index(current_floor)
    
    lower = all_floors[curr_floor_indx - 1] if curr_floor_indx > 0 else -1
    
    higher = all_floors[curr_floor_indx + 1] if curr_floor_indx < len(all_floors) - 1 else -1

    low_diff = current_floor - lower
    high_diff = higher - current_floor

    res = []

    if high_diff >= low_diff:
        res.extend(all_floors[:curr_floor_indx][::-1])
        res.extend(all_floors[curr_floor_indx+1:])
    else:
        res.extend(all_floors[curr_floor_indx+1:])
        res.extend(all_floors[:curr_floor_indx][::-1])

    return res