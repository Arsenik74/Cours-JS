const dataLowercase = "azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "&²\"'(-é)=+}àç*$%^^!";
const rangeValue = document.getElementById("password-length");
const button = document.getElementById("generateButton");
const lowerCase = document.getElementById("lowercase");
const upperCase = document.getElementById("uppercase");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const passwordOutput = document.getElementById("password-output");
console.log(passwordOutput);

function generatePassword() {
  let data = [];
  let password = "";

  if (lowerCase.checked) data.push(...dataLowercase);
  if (upperCase.checked) data.push(...dataUppercase);
  if (numbers.checked) data.push(...dataNumbers);
  if (symbols.checked) data.push(...dataSymbols);

  if (data.length === 0) {
    alert("Veuillez sélectionner des critères");
    return;
  }

  for (i = 0; i > rangeValue.value; i++) {
    password += data[Math.floor(Math.random() * data.length)];
    console.log(password);
  }

  passwordOutput.value = password;

  passwordOutput.select();
  document.execCommand("copy");

  generateButton.textContent = "Copié !";

  setTimeout(() => {
    generateButton.textContent = "Générer mot de passe";
  }, 2000);
}

button.addEventListener("click", generatePassword);
