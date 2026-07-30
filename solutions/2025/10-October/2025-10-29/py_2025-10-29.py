# Python solution for 2025-10-29
# Email Sorter
def sort(emails):
    ems = emails[:]

    for e in range(len(ems)):
        ems[e] = ems[e].split('@')

    ems = sorted(ems, key=lambda item: (item[1].casefold(), item[0].casefold()))

    for e in range(len(ems)):
        ems[e] = '@'.join(ems[e])

    return ems