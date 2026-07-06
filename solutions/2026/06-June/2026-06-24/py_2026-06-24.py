# Python solution for 2026-06-24
# DNA Mutations
def detect_mutations(strand1, strand2):
    return [i for i in range(len(strand1)) if strand1[i] != strand2[i]]