# Python solution for 2025-12-25
# Snowflake Generator
def generate_snowflake(crystals):
    lines = crystals.split('\n')
    res = []
    
    for line in lines:
        res.append(line + line[::-1])
        
    return '\n'.join(res)