// JavaScript solution for 2026-06-16
// British to American
function britishToAmerican(sentence) {
    const brToAm = {
        colour: "color",
        flavour: "flavor",
        honour: "honor",
        neighbour: "neighbor",
        labour: "labor",
        humour: "humor",
        centre: "center",
        fibre: "fiber",
        defence: "defense",
        offence: "offense",
        organise: "organize",
        recognise: "recognize",
        analyse: "analyze"
    };

    for (const [br, am] of Object.entries(brToAm)) {
        sentence = sentence.split(br).join(am);
        sentence = sentence.split(br.charAt(0).toUpperCase() + br.slice(1)).join(am.charAt(0).toUpperCase() + am.slice(1));
    }

    return sentence;
}