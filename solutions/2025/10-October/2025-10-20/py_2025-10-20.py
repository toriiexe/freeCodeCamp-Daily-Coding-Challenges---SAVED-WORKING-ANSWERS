# Python solution for 2025-10-20
# Tip Calculator
def calculate_tips(meal_price, custom_tip):
    price = float(meal_price[1:])
    cust_tip = float(custom_tip[:-1]) / 100

    return [f'${price * 0.15:.2f}', f'${price * 0.20:.2f}', f'${price * cust_tip:.2f}']