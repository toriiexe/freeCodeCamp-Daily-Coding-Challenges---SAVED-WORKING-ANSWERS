// JavaScript solution for 2025-11-24
// Message Validator
function isValidMessage(message, validator) {
    const words = message.toLowerCase().split(' ');
    const validation = validator.toLowerCase();

    if (words.length !== validation.length){
        return false;
    }

    for (let i = 0; i < validation.length; i++){
        if (words[i][0] !== validation[i]){
            return false;
        }
    }
    return true;
}