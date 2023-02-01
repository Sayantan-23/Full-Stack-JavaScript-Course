let num1 = 11,
  num2 = 45,
  num3 = 13;

let result = num1 + num2 + num3;

if (result === 0) {
  console.log("The result is 0");
} else {
  if (result % 2 === 0) {
    console.log("The result is even");
  } else {
    console.log("The result is odd");
  }
}

//USING TERNARY OPERATOR

if (result === 0) console.log("The result is 0");
else {
  result % 2 === 0
    ? console.log("The result is even")
    : console.log("The result is odd");
}
