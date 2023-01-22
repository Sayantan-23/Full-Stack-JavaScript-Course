// 23. Write a program to check that the number given by the user is a prime number or not.

function primeNumber(num) {
  if (num == 0 || num == 1) {
    return `${num} is not a prime number`;
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i == 0) {
      return `${num} is not a prime number`;
    }
  }
  return `${num} is a prime number`;
}

const prompt = require("prompt-sync")({ sigint: true });
const num = prompt("Enter a number: ");
console.log(primeNumber(num));
