# Python solution for 2026-06-16
# British to American
def british_to_american(sentence):
    brToAm = {
        "colour": "color",
        "flavour": "flavor",
        "honour": "honor",
        "neighbour": "neighbor",
        "labour": "labor",
        "humour": "humor",
        "centre": "center",
        "fibre": "fiber",
        "defence": "defense",
        "offence": "offense",
        "organise": "organize",
        "recognise": "recognize",
        "analyse": "analyze"
    }

    for br, am in brToAm.items():
        sentence = sentence.replace(br, am)
        sentence = sentence.replace(br.capitalize(), am.capitalize())

    return sentence