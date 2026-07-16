# Python solution for 2025-11-24
# Message Validator
def is_valid_message(message, validation):
    words = message.lower().split()
    validation = validation.lower()

    if len(words) != len(validation):
        return False

    for i in range(len(validation)):
        if words[i][0] != validation[i]:
            return False

    return True