// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function generatePassword () {
  
  alert("Please select your password criteria.");

  // Password length
  let passLength = prompt("Please select the number of characters for your password. Between 8 and 128.")  
  for (var i = 8; i <= 128;) {  
      if (typeof passLength === "number" || passLength === 8 || passLength <= 128) {
          alert(`Your password is ${passLength} characters long.`)
          break;
      } else (passLength !== 8 || passLength > 128 || typeof passLength === isNaN()) 
          alert("Please enter a numerical value between 8 -128.")
    }

  alert("Please select Ok or cancel for the folowing questions")
  
  // Password values
  let lowValues = confirm("Would you like to include Lowercase letters?")



  // for (var i; i <= passLength; i++)
  //   password = password + .charAt(Math.floor(Math.random() * Math.floor(passLength.length - 1)))
}



function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  alert("Please select your password criteria.")
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

