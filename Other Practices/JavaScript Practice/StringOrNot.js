// Write a JavaScript programme to check whether the input is string or not.

const prompt = require("prompt-sync")({ sigint: true });

const isString = () => {
  const inp = prompt("Enter the expression: ");

  if (typeof inp === "string") {
    console.log("It is a String");
  } else {
    console.log("Given expression is not a string");
  }
};

isString()