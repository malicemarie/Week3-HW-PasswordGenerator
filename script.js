var numOfChar = prompt('How many Characters do you want in your password?')

for (var i = numOfChar; i <= 8 || i >= 128; numOfChar = prompt(
    'How many Characters do you want in your password?')) {
    console.log(i);

    if (numOfChar < 8) {
        alert("Not enough Characters");
    }
    else if (numOfChar > 128) {
        alert("Too many characters");
    }

    else if (numOfChar >= 8 && numOfChar <= 128) {
        alert("sounds good!");
        break
    }

}



var specialChar = confirm("Do you want to use Special Characters?");
var lowerCase = confirm("Do you want to use lower case characters?");
var upperCase = confirm("Do you want to use upper case characters?");
var includeNum = confirm("Do you want to include numbers?");

console.log({
    numOfChar,
    specialChar,
    lowerCase,
    upperCase,
    includeNum
})

while (!specialChar && !lowerCase && !upperCase && !includeNum) {
    alert("Please include atleast one character type.")
    specialChar = confirm("Do you want to use Special Characters?");
    lowerCase = confirm("Do you want to use lower case characters?");
    upperCase = confirm("Do you want to use upper case characters?");
    includeNum = confirm("Do you want to include numbers?");
}

console.log({
    numOfChar,
    specialChar,
    lowerCase,
    upperCase,
    includeNum
})

var approvedChar = 'abcdefghijklmnopqrstuvwxyz'.split("");
console.log(approvedChar);
var approvedSpecChar = ['!', '@', '#', '$', '%', "?", "&", "*", "+"];
console.log(approvedSpecChar);








var specialCharacters = ['!', '@', '#', '$', '%', "?", "&", "*", "+"]

