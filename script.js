// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordText = document.querySelector("#password");
var passwords = [];


// Write password to the #password input
   alert("Please click the Genereate button to select your password criteria.") 
 
// Function used to generate values of the password
function generatePassword () {
    var passLength = prompt("Please enter the number of characters for your password. Between 8 and 128.") 
        if (typeof passLength === "number" || passLength >= 8 || passLength <= 128) {
            passLength = parseInt(passLength);
    }
            
alert("Please select 'ok' or 'cancel' for the folowing questions")

// Password values condinitional statements
    var lowerValues = confirm("Would you like to include Lowercase letters?")
        if (lowerValues) {
            passwords += "abcdefghijklmnopqrstuvwxyz";
                alert("Lowercase values have been added.")
          }

    var upperValues = confirm("Would you like to add uppercase values ");
        if (upperValues) {
            passwords += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
                alert("Uppercase values have been added")
        }
    var numbers = confirm("Would you like to include numbers?")
        if (numbers) {
            passwords += "1234567890";
                alert("Numbers have been added.");
        }   

    var symbols = confirm("Would you like to include numbers and symbols?")
        if (symbols) {
            passwords += "!ƒ@#$%®&©*åœ£¡œ¥øæ≥≤µ∆ß#&℃℘ℑℜℵ";
                alert("Symbols and numbers have been added.");
        }   
    var newPassword = '';      
        for (var i = 0; i < parseInt(passLength); i++) {
            newPassword += passwords[Math.floor((Math.random() * passwords.length))];
        }  
passwordText.textContent = newPassword;

}

function writePassword() {
  var password = generatePassword();
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


