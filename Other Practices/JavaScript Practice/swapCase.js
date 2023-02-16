// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case. Go to the editor
// Test Data :
// console.log(swapcase('AaBbc'));
// "aAbBC"

const prompt = require("prompt-sync")({ sigint: true });

const swapCase = () => {
  let newStr = "";
  const str = prompt("Enter the string: ");
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i].toUpperCase()) {
      newStr += str[i].toLowerCase();
    } else {
      newStr += str[i].toUpperCase();
    }
  }
  return newStr;
};

console.log(swapCase());
