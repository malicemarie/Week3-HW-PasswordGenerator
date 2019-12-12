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


//Confirming the type of special characters to be used

var specialChar = confirm("Do you want to use Special Characters?");
var lowerCase = confirm("Do you want to use lower case characters?");
var upperCase = confirm("Do you want to use upper case characters?");
var includeNum = confirm("Do you want to include numbers?");


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


var approvedLowerChar = 'abcdefghijklmnopqrstuvwxyz'.split("");
var approvedUpperChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split("");
var approvedSpecChar = ['!', '@', '#', '$', '%', "?", "&", "*", "+"];
var approvedNumbers = '1234567890'.split("");



// Determine number of Characters

var charInPW = []
console.log(charInPW)

if (specialChar){
    charInPW = charInPW.concat(approvedSpecChar);
}

if (lowerCase) {
    charInPW = charInPW.concat(approvedLowerChar);
}

if (upperCase){
    charInPW = charInPW.concat(approvedUpperChar);

}
if (includeNum){
    charInPW = charInPW.concat(approvedNumbers);
}

console.log(charInPW)

var randomPW = [];

function grabRandomEl(array){
    return array[Math.floor(Math.random()*array.length)];
} 
function includeAllCorrectChar(){
    var allCorrectChar = [];
    if (specialChar){
        allCorrectChar = allCorrectChar.push(grabRandomEl(approvedSpecChar))
    }
    if (lowerCase){
        allCorrectChar = allCorrectChar.push(grabRandomEl(approvedLowerChar))
    }
    if (upperCase){
        allCorrectChar = allCorrectChar.push(grabRandomEl(approvedUpperChar))
    }
    if (includeNum){
        allCorrectChar = allCorrectChar.push(grabRandomEl(approvedNumbers))
    }
    return allCorrectChar;
}

var usersChoice = includeAllCorrectChar

for (var i = 0; i < numOfChar; i++){
    var el = grabRandomEl(charInPW);
    console.log(el);
    randomPW.push(el);
    
}

randomPW = randomPW.slice(usersChoice.length);
console.log("include random PW", randomPW)
randomPW = randomPW.concat(usersChoice);
console.log("after",randomPW);






