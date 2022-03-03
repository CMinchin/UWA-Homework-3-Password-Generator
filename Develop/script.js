// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordBox = document.querySelector("#password").parentNode;
var slider = document.getElementById("lengthS");
var sliderDisplay = document.getElementById("lengthP");
var chars = document.getElementById("chars");
var warning = document.getElementById("warning");


// Write password to the #password input
function writePassword() {
  var charlist = "";
  Array.from(chars.children).forEach(char => {
    if (char.children[0].checked) {
      charlist += char.children[0].getAttribute("data-chars");
    }
  });

  if (charlist.length) {
    warning.setAttribute("style","display: none;");
    var password = generatePassword(charlist);
    var passwordText = passwordBox.children[0];

    passwordText.value = password;
  } else {
    warning.setAttribute("style","color: red;");
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(charlist) {
  var password = "";
  c = charlist.split("");
  for (var x = 0; x<slider.value; x++) {
    password += c[Math.floor(Math.random()*charlist.length)];
  }

  return password;
}

slider.oninput = function() {
  sliderDisplay.textContent = "Password length: "+this.value;
}