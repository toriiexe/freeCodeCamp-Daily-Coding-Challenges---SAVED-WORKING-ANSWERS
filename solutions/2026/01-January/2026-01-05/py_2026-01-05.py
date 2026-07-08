# Python solution for 2026-01-05
# Tire Pressure
def tire_status(pressures_psi, range_bar): 
    barValue = 14.5038 
    minBar, maxBar = range_bar[0] * barValue, range_bar[1] * barValue 

    res = [] 

    for pressure in pressures_psi: 
        if pressure < minBar: 
            res.append('Low') 
        elif pressure <= maxBar: 
            res.append('Good') 
        else: 
            res.append('High') 
            
    return res