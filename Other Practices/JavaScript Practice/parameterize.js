// Write a JavaScript function to parameterize a string. Go to the editor
// Test Data :
// console.log(string_parameterize("Robin Singh from USA."));
// "robin-singh-from-usa"

const prompt = require("prompt-sync")({ sigint: true });

const stringParameterize = () => {
  const inp = prompt("Enter the string: ").toLowerCase().trim();
  const arr = inp.split(" ");
  const result = arr.join("-");
  console.log(result);
};

stringParameterize();
