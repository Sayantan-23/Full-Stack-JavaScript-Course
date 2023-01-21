// 15. Write a program which can give grades to students according to theirs scores:
// - 80-100, A
// - 70-79, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

const prompt = require("prompt-sync")({ sigint: true });

const marks = prompt("Enter marks: ");

if (marks >= 80 && marks <= 100) {
  console.log(`Your grade is A`);
} else if (marks >= 70) {
  console.log(`Your grade is B`);
} else if (marks >= 60) {
  console.log(`Your grade is C`);
} else if (marks > 50) {
  console.log(`Your grade is D`);
} else if (marks >= 0 && marks <= 49) {
  console.log(`Your grade is E`);
} else {
  console.log(`Enter marks between 0 to 100`);
}
