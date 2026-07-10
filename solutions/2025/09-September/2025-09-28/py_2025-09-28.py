# Python solution for 2025-09-28
# CSV Header Parser
def get_headings(csv):
    return [heading.strip() for heading in csv.split(',')]