# Python solution for 2025-11-10
# Extension Extractor
def get_extension(filename):
    return 'none' if (filename.count('.') == 0 or filename.endswith('.')) else filename.split('.')[-1]