# Python solution for 2025-10-18
# Missing Socks
def sock_pairs(pairs, cycles):
    single = pairs * 2

    for cycle in range(1, cycles + 1):
        if cycle % 2 == 0:
            single -= 1

        if cycle % 3 == 0:
            single += 1

        if cycle % 5 == 0:
            single -= 1

        if cycle % 10 == 0:
            single += 2

        single = max(0, single)

    return single // 2