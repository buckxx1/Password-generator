// Assignment code here
var length = Number(prompt("How many characters would you like your password to be?"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length has to be between 8-128 characters. please select a number that satisfies this"));

var uppers = confirm("Should the password include uppercase letters?");
var lowers = confirm("Should the password include lowercase letters?");
var numbers = confirm("Should the password include numbers?");
var symbols = confirm("Should the password include special characters?");

while (!uppers && !lowers && !numbers && !symbols) {
  alert("You must select at least one character type!");
  uppers = confirm("Should the password include uppercase letters?");
  lowers = confirm("Should the password include lowercase letters?");
  numbers = confirm("Should the password include numbers?");
  symbols = confirm("Should the password include special characters?");
}

window.addEventListener('load', function() {
  generateNewPassword();
});

function generateNewPassword() {
  var password = "";


  var allowed = {};
  if (uppers) password += rando(allowed.uppers = "QWERTYUIOPASDFGHJKLZXCVBNM");
  if (lowers) password += rando(allowed.lowers = "qwertyuiopasdfghjklzxcvbnm");
  if (numbers) password += rando(allowed.numbers = "1234567890");
  if (symbols) password += rando(allowed.symbols = "!@#$%^&*(){}[]=<>/,.-_=+");

  for (var i = password.length; i < length; i++) password += rando(rando(allowed).value);

  document.getElementById("password").value = randoSequence(password).join("");
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
