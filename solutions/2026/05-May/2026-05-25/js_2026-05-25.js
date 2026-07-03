// JavaScript solution for 2026-05-25
// Secret Number
function guessNumber(secret, guess) {
    if (secret > guess){
        return 'higher';
    }
    else if (secret < guess){
        return 'lower';
    }
    else{
        return 'you got it!';
    }
}