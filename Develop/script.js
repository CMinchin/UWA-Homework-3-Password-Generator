// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordBox = document.querySelector("#password").parentNode;
var slider = document.getElementById("lengthS");
var sliderDisplay = document.getElementById("lengthP");
var chars = document.getElementById("chars");


// Write password to the #password input
function writePassword() {
  var charlist = ""
  Array.from(chars.children).forEach(char => {
    console.log((char.children[0].checked));
    if (char.children[0].checked) {
      charlist += char.getAttribute("-data");
    }
  });

  if (charlist.length) {
    var password = generatePassword(charlist);
    var passwordText = passwordBox.children[0];

    passwordText.value = password;
  } else {
    console.assert("select a box");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(charlist) {


  return "baba yaga"
}

slider.oninput = function() {
  sliderDisplay.textContent = "Password length: "+this.value;
}