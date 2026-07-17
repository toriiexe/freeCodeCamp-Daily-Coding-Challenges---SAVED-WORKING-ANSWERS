# Python solution for 2025-10-19
# HTML Attribute Extractor
import re
def extract_attributes(element):
    matches = re.findall(r'([a-z]+)="([^"]*)"', element)
    return [f"{name}, {value}" for name, value in matches]