# Python solution for 2025-10-30
# Complementary DNA
def complementary_dna(strand):
    mapping = {
        'A': 'T',
        'T': 'A',
        'C': 'G',
        'G': 'C'
    }

    return ''.join(mapping[key] for key in strand)