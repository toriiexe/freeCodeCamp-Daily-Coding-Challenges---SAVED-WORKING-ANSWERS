# Python solution for 2026-07-24
# Loan Calculator
def get_loan_schedule(loan_amount, annual_rate, monthly_payment):
    res = [loan_amount]

    while loan_amount > 0:
        interest = loan_amount * (annual_rate / 100) / 12
        loan_amount = max(0, loan_amount + interest - monthly_payment)
        res.append(round(loan_amount))

    return res