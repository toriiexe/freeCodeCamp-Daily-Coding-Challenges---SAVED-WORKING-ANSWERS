# Python solution for 2025-08-28
#Second Best
def get_laptop_cost(laptops, budget):
    laptopSorted = sorted(set(laptops), reverse=True)

    if len(laptopSorted) > 1 and budget >= laptopSorted[1]:
        return laptopSorted[1]

    for laptop in laptopSorted:
        if budget >= laptop:
            return laptop

    return 0