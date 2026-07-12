# Python solution for 2026-02-02
# Groundhog Day
def groundhog_day_prediction(appearance):
    if isinstance(appearance, bool):
        if appearance == True:
            return "Looks like we'll have six more weeks of winter."
        else:
            return "It's going to be an early spring."
    else:
        return "No prediction this year."