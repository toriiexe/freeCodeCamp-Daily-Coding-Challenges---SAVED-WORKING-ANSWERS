# Python solution for 2026-03-22
# Coffee Roast Detector
def detect_roast(beans):
    amount_of_beans = len(beans)

    avg_light_beans = beans.count("'") * 1 / amount_of_beans
    avg_medium_beans = beans.count("-") * 2 / amount_of_beans
    avg_dark_beans = beans.count(".") * 3 / amount_of_beans

    total = avg_light_beans + avg_medium_beans + avg_dark_beans

    if total < 1.75:
        return "Light"
    elif total <= 2.5:
        return "Medium"
    else:
        return "Dark"