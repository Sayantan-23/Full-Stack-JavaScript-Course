// 17. Write a program which tells the number of days in a month.

const prompt = require("prompt-sync")({ sigint: true });

let getDaysInMonth = () => {
  const monthNum = prompt("Enter the month in numbers: ");

  if (monthNum > 12 || monthNum < 1) {
    console.log("Enter number between 1 to 12");
    getDaysInMonth();
  }
  
  if (monthNum <= 7) {
    if (monthNum == 2) {
      console.log(28);
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

getDaysInMonth();
