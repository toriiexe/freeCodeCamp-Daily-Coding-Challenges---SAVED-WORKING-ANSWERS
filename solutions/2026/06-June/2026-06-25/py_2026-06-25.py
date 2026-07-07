# Python solution for 2026-06-25
# Frontmatter Parser
def parse_frontmatter(s):
    d = {}
    for line in s.strip().split("\n")[1:-1]:
        key, value = line.split(": ", 1)
        if value == "true":
            value = True
        elif value == "false":
            value = False
        else:
            try:
                value = int(value)
            except ValueError:
                try:
                    value = float(value)
                except ValueError:
                    pass

        d[key] = value
    return d