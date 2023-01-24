// 30. Create a simple calculator program in JavaScript which can perform the addition, subtraction, multiplication and division on given numbers.

const prompt = require("prompt-sync")({ sigint: true });

const calculator = () => {
  const num1 = prompt("Enter first number: ");
  const num2 = prompt("Enter second number: ");
  const action = prompt(
    "What calculation you want to perform - \n 1. Addition\n 2. Subtraction\n 3. Multiplication\n 4. Division\n Choose between 1 to 4: "
  );

  if (action == 1) {
    console.log(`${num1} + ${num2} = ${num1 + num2}`);
  } else if (action == 2) {
    console.log(`${num1} - ${num2} = ${num1 - num2}`);
  } else if (action == 3) {
    console.log(`${num1} * ${num2} = ${num1 * num2}`);
  } else if (action == 4) {
    console.log(`${num1} / ${num2} = ${num1 / num2}`);
  } else {
    console.log(`please choose action between 1 to 4`);
  }
};

calculator();
