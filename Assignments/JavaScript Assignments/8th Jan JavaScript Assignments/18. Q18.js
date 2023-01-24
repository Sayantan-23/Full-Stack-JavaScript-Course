// 18. Write a program which tells the number of days in a month, now consider leap year.

const prompt = require("prompt-sync")({ sigint: true });

// First Approach
// let getDaysInMonth = () => {
//   const month = prompt("Enter the month in numbers: ");
//   const year = prompt("Enter the year: ");
//   return new Date(year, month, 0).getDate();
// };

// console.log(getDaysInMonth());

// Another Approach
let getDaysInMonth2 = () => {
  const monthNum = prompt("Enter the month in numbers: ");
  if (monthNum > 12 || monthNum < 1) {
    console.log("Enter number between 1 to 12");
    getDaysInMonth();
  }

  if (monthNum <= 7) {
    if (monthNum == 2) {
      const year = prompt("Enter the year: ");
      if (
        (year % 100 == 0 && year % 400 == 0) ||
        (year % 100 != 0 && year % 4 == 0)
      ) {
        console.log(29);
      } else {
        console.log(28);
      }
    } else if (monthNum % 2 != 0) {
      console.log(31);
    } else {
      console.log(30);
    }
  } else {
    if (monthNum % 2 == 0) {
      console.log(31);
    } else {
      console.log(30);
    }
  }
};

getDaysInMonth2();
