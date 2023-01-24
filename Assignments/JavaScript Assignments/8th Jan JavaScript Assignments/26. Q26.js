// 26. Write a program to print the table of any number given by the user. The format of the output should be similar to the below example-
// 	If the number given by the user is 2 then the output should look like this-
// 	2 * 1 = 2
// 	2 * 2 = 4
// 	2 * 3 = 6 and so on till 2 * 10 = 20.

const prompt = require("prompt-sync")({ sigint: true });

const multiplicationTable = () => {
  const num = prompt("Enter the number: ");
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

multiplicationTable()