// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

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

