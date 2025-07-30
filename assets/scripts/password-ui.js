/*global document*/
/*global isStrongPassword*/
/*global generatePassword*/

function isNumber(value) {
    // Returns true if string value is a number
    // false otherwise
    // Source Ryan Forrester
    // https://medium.com/@ryan_forrester_/
    // javascript-check-if-a-string-is-a-number-explained-simply-d8aaa6189841
    return !Number.isNaN(Number.parseFloat(value)) && Number.isFinite(value);
}

function isWholeNumberGreaterThanZero(n) {
    let validWholeNumberGreaterThanZero = true;
    if (!isNumber(n)) {
        validWholeNumberGreaterThanZero = false;
    } else {
        n = parseFloat(n);
        // Parse float so the user can be told if they
        // have entered a float rather than just losing the
        // decimal part with parseInt
        if (n <= 0) {
            validWholeNumberGreaterThanZero = false;
        } else {
            if (n !== Math.trunc(n)) {
                validWholeNumberGreaterThanZero = false;
            }
        }
    }
    return validWholeNumberGreaterThanZero;
}

function checkStrongPassword() {
    let password = document.getElementById("txtPassword").value;
    if (isStrongPassword(password)) {
        document.getElementById("result").innerHTML = "Strong";
    } else {
        document.getElementById("result").innerHTML = "Weak";
    }
}

function makeStrongPassword() {
    let length = document.getElementById("txtLength").value;
    let resultDiv = document.getElementById("result");
    if (isWholeNumberGreaterThanZero(length)) {
        if (length < 10) {
            resultDiv.innerHTML = "Password should be 10 or more characters";
        } else {
            let pw = generatePassword(length);
            resultDiv.innerHTML = pw;
        }
    } else {
        resultDiv.innerHTML = "Please enter a whole number > 0";
    }
}