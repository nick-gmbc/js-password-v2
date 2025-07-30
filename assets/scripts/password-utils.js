let CAPS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let LOWER = "abcdefghijklmnopqrstuvwxyz";
let DIGITS = "0123456789";
let PUNC = "!'£$%^&*()@<>,.?/";

function isStrongPassword(password) {
    // Function returns true is strong password at least length 10
    // and contains at least one of capital, lower case, punctuation
    // and digit.  False otherwise
    let longEnough = true;
    if (password.length < 10) {
        longEnough = false;
    }
    let hasCap = containsOneOfChar(password, CAPS);
    let hasLower = containsOneOfChar(password, LOWER);
    let hasDigits = containsOneOfChar(password, DIGITS);
    let hasPunc = containsOneOfChar(password, PUNC);
    return longEnough && hasCap && hasLower && hasDigits && hasPunc;
}
function containsOneOfChar(strg, chrs) {
    // Function returns true if an characacter is chrs is contained in strg
    // false otherwise

    let found = false;
    let charPosition = 0;
    while (charPosition !== chrs.length) {
        if (strg.includes(chrs.substring(charPosition, charPosition + 1))) {
            found = true;
            break;
        }
        charPosition += 1;
    }
    return found;
}

function randBetween(lower, upper) {
    return Math.floor(lower + Math.random() * (upper - lower + 1));
}

function pickRandomCharacter() {
    let allChars = CAPS + LOWER + DIGITS + PUNC;
    let positionOfChar = randBetween(0, allChars.length - 1);
    return allChars.substring(positionOfChar, positionOfChar + 1);
}

function generatePassword(length) {
    if (length < 10) {
        length = 10;
    }
    let password = "";
    while (!isStrongPassword(password)) {
        password = "";
        let count = 1;
        while (count <= length) {
            password += pickRandomCharacter();
            count += 1;
        }
    }
    return password;
}