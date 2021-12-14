
function generatePassword() {

    var range = 0;

    while (range < 8 || range > 128) {
        var rangeChar = prompt("How many characters would you like your password to contain (8-128 characters)?");
        range = parseInt(rangeChar);
        if (range < 8 || range > 128) {
            alert("Please choose password length from 8-128 characters");
        }
    }

    var confirmSpecial = confirm("Click OK to confirm including special characters");
    var confirmNumeric = confirm("Click OK to confirm including numeric characters");
    var confirmLowercase = confirm("Click OK to confirm including lowercase characters");
    var confirmUppercase = confirm("Click OK to confirm including uppercase characters");
    var newpassword = "";

    while (confirmSpecial === false && confirmNumeric === false && confirmLowercase === false && confirmUppercase === false) {
        alert("Please choose at least one character type");
        confirmSpecial = confirm("Click OK to confirm including special characters");
        confirmNumeric = confirm("Click OK to confirm including numeric characters");
        confirmLowercase = confirm("Click OK to confirm including lowercase characters");
        confirmUppercase = confirm("Click OK to confirm including uppercase characters");
    }

    var number = "0123456789";
    var lowercase = "abcdefghijklmnopqrstuvwxyz";
    var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var special = "!@#$%^&*()_+";
    var Char = "";

    if (confirmNumeric) {
        Char = Char + number;

    }

    if (confirmSpecial) {
        Char = Char + special;

    }

    if (confirmLowercase) {
        Char = Char + lowercase;

    }

    if (confirmUppercase) {
        Char = Char + uppercase;

    }

    for (var i = 1; i <= range; i++) {
        newpassword = newpassword + Char.charAt(Math.floor(Math.random() * Math.floor(Char.length + 1)));
    }

    return (newpassword);
}

///////////////////////////////////////////////////////////////////////
// DO NOT TOUCH THIS CODE
//
// This code handles:
// * clicking the Generate Password
// * writing the password to the screen
//

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//////////////////////////////////////////////////////////////////////