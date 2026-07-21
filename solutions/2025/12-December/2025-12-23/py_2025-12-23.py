# Python solution for 2025-12-23
# Re: Fwd: Fw: Count
import re

def email_chain_count(subject):
    return len(re.findall(r'fwd:|fw:|re:', subject, re.I))


"""
# Re: Fwd: Fw: Count - ANOTHER SOLUTION
def email_chain_count(subject):
    s = subject.lower()

    fw_counter = s.count('fw:')
    fwd_counter = s.count('fwd:')
    re_counter = s.count('re:')
    return fw_counter + fwd_counter + re_counter
"""